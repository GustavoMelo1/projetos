// ====== Seletores (batendo com seu HTML) ======
const elTotal      = document.getElementById('total');
const elMes        = document.getElementById('total-mes');
const elCargoTop   = document.getElementById('total-cargo');
const elTabelaBody = document.querySelector('#tabela tbody');
const elBusca      = document.querySelector('.barra-filtro input');
const [selAno, selCargo, selTipo, selEscolaridade, selEstadoCivil] = document.querySelectorAll('.filtros select');
const btnCSV = document.querySelector('.botao-csv');
const btnPDF = document.querySelector('.botao-pdf');

// ====== Estado ======
let RAW = [];   // tudo do CSV
let VIEW = [];  // filtrado

// ====== Boot ======
init();

async function init() {
    try {
        RAW = await loadCSV('dados.csv'); // precisa estar na MESMA pasta do index.html
        VIEW = [...RAW];
        popularFiltros(RAW);
        render();
        bind();
} catch (e) {
    console.error(e);
    // mostra algo na tela (opcional)
}
}

// ====== Eventos ======
function bind() {

    [selAno, selCargo, selTipo, selEscolaridade, selEstadoCivil].forEach(s => s.addEventListener('change', aplicarFiltros));
    elBusca.addEventListener('input', aplicarFiltros);
    btnCSV.addEventListener('click', exportarCSV);
        btnPDF.addEventListener('click', () => window.print());
}

function aplicarFiltros() {
    const ano   = selAno.value || 'Todos';
    const cargo = selCargo.value || 'Todos';
    const tipo  = selTipo.value || 'Todos';
    const esc   = selEscolaridade.value || 'Todos';
    const est   = selEstadoCivil.value || 'Todos';
    const q     = (elBusca.value || '').toLowerCase();

    VIEW = RAW.filter(r =>
        (ano === 'Todos'   || String(r.Ano) === String(ano)) &&
        (cargo === 'Todos' || r.Cargo === cargo) &&
        (tipo === 'Todos'  || r.Tipo === tipo) &&
        (esc === 'Todos'   || r.Escolaridade === esc) &&
        (est === 'Todos'   || r.EstadoCivil === est) &&
        (
    q === '' ||
        `${r.Nome} ${r.CPF} ${r.RG} ${r.OAB} ${r.Redes} ${r.Banco} ${r.Agencia} ${r.Conta} ${r.Cargo} ${r.Tipo}`
        .toLowerCase()
        .includes(q)
    )
    );

    render();
}

// ====== Render ======
function render() {
    renderKPIs(VIEW);
    renderTabela(VIEW);
}

function renderKPIs(rows) {
    elTotal.textContent = rows.length;

    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const doMes = rows.filter(r => Number(r.Ano) === y && Number(r.Mes) === m).length;
    elMes.textContent = doMes;

    const freq = rows.reduce((acc, r) => {
        const k = r.Cargo || '—';
        acc[k] = (acc[k] || 0) + 1;
        return acc;
    }, {});
    const top = Object.entries(freq).sort((a,b) => b[1]-a[1])[0]?.[0] ?? '—';
    elCargoTop.textContent = top;
}

function renderTabela(rows) {
    const html = rows.map(r => `
    <tr>
        <td>${esc(r.Nome)}</td>
        <td>${esc(r.CPF)}</td>
        <td>${esc(r.RG)}</td>
        <td>${esc(r.OAB)}</td>
        <td>${esc(r.Redes)}</td>
        <td>${esc(r.Banco)}/${esc(r.Agencia)}/${esc(r.Conta)}</td>
        <td><span class="badge ${badgeConsent(r.Consentimento)}">${esc(r.Consentimento)}</span></td>
        <td><span class="badge ${badgeTipo(r.Tipo)}">${esc(r.Tipo)}</span></td>
    </tr>
    `).join('');
    elTabelaBody.innerHTML = html || `<tr><td colspan="8">Nenhum registro encontrado.</td></tr>`;
}

function badgeTipo(t) {
    if (t === 'CLT') return 'badge-azul';
    if (t === 'PJ')  return 'badge-roxo';
    if (t && t.toLowerCase().includes('est')) return 'badge-verde';
    return 'badge-neutro';
}
function badgeConsent(v) {
    return (String(v).toLowerCase() === 'sim') ? 'badge-verde' : 'badge-neutro';
}

// ====== CSV ======
async function loadCSV(path) {
    const res = await fetch(path, { cache: 'no-store' });
    if (!res.ok) throw new Error('Não foi possível carregar ' + path);
    const text = await res.text();
    return parseCSV(text);
}

function parseCSV(text) {
    const lines = text.trim().split(/\r?\n/);
    const header = splitCSVLine(lines.shift());
    const idx = (name) => header.indexOf(name);

    return lines.map(line => {
        const cols = splitCSVLine(line);
        const get = (name) => cols[idx(name)] ?? '';
        const row = {
        Nome: get('Nome'),
        CPF: get('CPF'),
        RG: get('RG'),
        OAB: get('OAB'),
        Redes: get('Redes'),
        Banco: get('Banco'),
        Agencia: get('Agencia'),
        Conta: get('Conta'),
        Consentimento: get('Consentimento'),
        Tipo: get('Tipo'),
        Cargo: get('Cargo'),
        Ano: Number(get('Ano')) || null,
        Mes: Number(get('Mes')) || null,
        Escolaridade: get('Escolaridade'),
        EstadoCivil: get('EstadoCivil'),
        DataCadastro: get('DataCadastro')
    };
    return row;
    });
}

// divide linha CSV respeitando aspas
function splitCSVLine(line) {
    const out = [];
    let cur = '';
    let q = false;
    for (let i=0;i<line.length;i++) {
        const ch = line[i];
        if (ch === '"') {
            if (q && line[i+1] === '"') { cur += '"'; i++; }
            else { q = !q; }
    } else if (ch === ',' && !q) {
        out.push(cur); cur = '';
    } else {
        cur += ch;
    }
    }
    out.push(cur);
    return out;
}

// ====== Filtros ======
function popularFiltros(rows) {
    preencherSelect(selAno,        uniq(rows.map(r => r.Ano).filter(Boolean)));
    preencherSelect(selCargo,      uniq(rows.map(r => r.Cargo).filter(Boolean)).sort());
    preencherSelect(selTipo,       uniq(rows.map(r => r.Tipo).filter(Boolean)).sort());
    preencherSelect(selEscolaridade, uniq(rows.map(r => r.Escolaridade).filter(Boolean)).sort());
    preencherSelect(selEstadoCivil,  uniq(rows.map(r => r.EstadoCivil).filter(Boolean)).sort());
}

function preencherSelect(sel, valores) {
    sel.innerHTML = '';
    const optTodos = new Option('Todos', 'Todos');
    sel.append(optTodos);
    valores.forEach(v => sel.append(new Option(v, v)));
}

function uniq(arr){ return [...new Set(arr)]; }
function esc(s){ return String(s ?? '').replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m])); }

// ====== Exportar CSV (somente o filtrado atual) ======
function exportarCSV() {
    const header = ['Nome','CPF','RG','OAB','Redes','Banco','Agencia','Conta','Consentimento','Tipo','Cargo','Ano','Mes','Escolaridade','EstadoCivil','DataCadastro'];
    const rows = VIEW.map(r => header.map(h => r[h] ?? ''));
    const csv = [header.join(','), ...rows.map(r => r.map(csvEscape).join(','))].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contratacoes_filtrado_${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function csvEscape(val){
    const s = String(val ?? '');
    return /[",\n]/.test(s) ? `"${s.replace(/"/g,'""')}"` : s;
}
