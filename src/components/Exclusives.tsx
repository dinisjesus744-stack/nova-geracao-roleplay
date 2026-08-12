import React from 'react'

const cards = [
  {title:'Veículos Exclusivos',desc:'Uma grande variedade de veículos para todos os estilos',icon:'🚗',img:'/src/assets/card1.jpg'},
  {title:'Roupas Exclusivas',desc:'Personalize seu personagem com diferentes estilos e coleções',icon:'👕',img:'/src/assets/card2.jpg'},
  {title:'Bases Exclusivas',desc:'Crie e administre sua organização com bases personalizadas',icon:'🏠',img:'/src/assets/card3.jpg'},
  {title:'Trabalhos',desc:'Tenha acesso a diferentes profissões e formas de construir sua história',icon:'💼',img:'/src/assets/card4.jpg'},
  {title:'Sistemas Exclusivos',desc:'Sistemas desenvolvidos para tornar o Roleplay ainda mais completo',icon:'⚙️',img:'/src/assets/card5.jpg'},
  {title:'Eventos',desc:'Participe de eventos especiais e experiências únicas dentro da cidade',icon:'🎉',img:'/src/assets/card6.jpg'},
]

export default function Exclusives(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-extrabold mb-6">UMA NOVA EXPERIÊNCIA DE ROLEPLAY</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(c=> (
            <div key={c.title} className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:`url(${c.img})`, filter:'brightness(.6)'}} />
              <div className="relative p-6 h-44 flex flex-col justify-end">
                <div className="text-2xl font-bold">{c.icon} {c.title}</div>
                <div className="text-gray-300 mt-2">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
