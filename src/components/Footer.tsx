import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-black/80 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 text-gray-300">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <div className="font-extrabold text-white text-xl">NOVA GERAÇÃO ROLEPLAY</div>
            <div className="mt-2">Transformando histórias em experiências.</div>
            <div className="mt-4 text-sm">Nova Geração Roleplay não é afiliada à Rockstar Games, Take-Two Interactive ou qualquer outro detentor dos direitos de Grand Theft Auto.</div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <h5 className="font-semibold">Menu</h5>
              <ul className="mt-2 text-sm text-gray-400">
                <li>Início</li>
                <li>Quem Somos</li>
                <li>Como Jogar</li>
                <li>Exclusividades</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Suporte</h5>
              <ul className="mt-2 text-sm text-gray-400">
                <li>Notícias</li>
                <li><a href="https://discord.gg/PhbfXkHDNc" target="_blank" rel="noopener noreferrer">Discord</a></li>
                <li>Loja</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">Copyright © 2026 Nova Geração Roleplay. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}
