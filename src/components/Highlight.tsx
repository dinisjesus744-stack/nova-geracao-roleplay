import React from 'react'

export default function Highlight(){
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/src/assets/highlight.jpg')] bg-cover bg-center" style={{filter:'brightness(.45)'}} />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h3 className="text-4xl font-extrabold">SUA HISTÓRIA COMEÇA AGORA</h3>
        <p className="mt-4 text-gray-300">Entre para a Nova Geração Roleplay e escreva sua própria história.</p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-primary rounded-full font-semibold">COMEÇAR A JOGAR</button>
        </div>
      </div>
    </section>
  )
}
