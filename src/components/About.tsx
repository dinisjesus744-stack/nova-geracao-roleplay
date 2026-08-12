import React from 'react'

export default function About(){
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:flex lg:items-center lg:gap-12">
        <div className="lg:flex-1">
          <h2 className="text-3xl font-extrabold mb-4">QUEM SOMOS?</h2>
          <p className="text-gray-300">A Nova Geração Roleplay nasceu com o objetivo de proporcionar uma experiência de Roleplay única, imersiva e inovadora dentro do MTA:SA.</p>
          <p className="mt-4 text-gray-300">Nossa equipe trabalha diariamente para oferecer sistemas exclusivos, estabilidade, segurança e uma comunidade onde cada jogador possa construir sua própria história.</p>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="w-full h-64 bg-[url('/src/assets/about.jpg')] bg-cover bg-center rounded-2xl shadow-lg" />
        </div>
      </div>
    </section>
  )
}
