import React from 'react'

export default function Hero(){
  return (
    <section className="relative h-screen min-h-[680px] flex items-center">
      <div className="absolute inset-0 bg-[url('/src/assets/hero-city.jpg')] bg-cover bg-center" style={{filter:'brightness(.45)'}} />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* logo removed as requested */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">NOVA GERAÇÃO <span className="block text-4xl md:text-6xl font-bold mt-2 text-primary">ROLEPLAY</span></h1>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">Onde a sua história ganha vida.</p>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">Entre para uma cidade vibrante, com sistemas exclusivos, eventos e uma comunidade dedicada.</p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="#howto" className="px-6 py-3 bg-primary rounded-full font-semibold shadow-lg hover:scale-[1.02] transition">COMEÇAR A JOGAR</a>
          <a href="https://discord.gg/PhbfXkHDNc" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-600 rounded-full font-semibold hover:bg-white/5 transition">ENTRAR NO DISCORD</a>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-sm text-gray-300">Cidade | Veículos | Missões | Comunidade</div>
    </section>
  )
}
