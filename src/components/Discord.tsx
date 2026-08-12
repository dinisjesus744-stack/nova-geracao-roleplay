import React from 'react'

export default function Discord(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-extrabold">FAÇA PARTE DA NOSSA COMUNIDADE</h3>
          <p className="mt-4 text-gray-300">Entre no nosso Discord oficial para acompanhar novidades, eventos, suporte e conversar com outros jogadores.</p>
          <div className="mt-6">
            <a href="https://discord.gg/PhbfXkHDNc" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary rounded-full inline-block">ENTRAR NO DISCORD</a>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 bg-white/3 rounded-2xl glass text-center">
          <div className="text-3xl font-extrabold">+5K</div>
          <div className="text-gray-300">Membros no Discord</div>
        </div>
      </div>
    </section>
  )
}
