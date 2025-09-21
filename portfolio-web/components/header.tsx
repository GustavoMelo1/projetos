"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        border-b
        bg-[var(--bg)] text-[var(--text)]
        border-[var(--line)]
      "
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Gustavo
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#sobre" className="hover:underline">Sobre</a>
          <a href="#projetos" className="hover:underline">Projetos</a>
          <a href="#habilidades" className="hover:underline">Habilidades</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>

        <a
          href="#contato"
          className="
            px-4 py-2 rounded
            bg-[var(--primary)] text-[var(--primary-foreground)]
            text-sm
            hover:bg-[#0063AD]
            transition
          "
        >
          Contato
        </a>
      </div>
    </header>
  )
}

