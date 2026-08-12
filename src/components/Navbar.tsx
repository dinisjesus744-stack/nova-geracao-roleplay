import React, { useEffect, useState } from 'react'

export default function Navbar(){
  const [scrolled,setScrolled]=useState(false)
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>30)
    onScroll()
    window.addEventListener('scroll',onScroll)
    return ()=>window.removeEventListener('scroll',onScroll)
  },[])

  return (
    <header className={`fixed w-full z-40 top-0 transition-all ${scrolled? 'bg-black/70 backdrop-blur-md shadow-md':'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div>
            <div className="font-black text-lg md:text-xl">NOVA GERAÇÃO</div>
            <div className="text-xs text-gray-400">Onde a sua história ganha vida.</div>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>Início</li>
          <li>Quem Somos</li>
          <li>Como Jogar</li>
          <li>Exclusividades</li>
          <li>Discord</li>
        </ul>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline px-4 py-2 bg-white text-black rounded-full font-semibold">JOGAR AGORA</button>
          <button className="md:hidden px-3 py-2 border rounded-lg">Menu</button>
        </div>
      </nav>
    </header>
  )
}
