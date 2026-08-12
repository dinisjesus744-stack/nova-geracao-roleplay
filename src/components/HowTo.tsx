import React from 'react'

const Step = ({num,title,children,cta,ctaLink}:{num:number,title:string,children:string,cta:string,ctaLink?:string})=> (
  <div className="p-6 bg-white/3 rounded-2xl glass">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold">{num}</div>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-gray-300">{children}</p>
      </div>
    </div>
    <div className="mt-4">
      {ctaLink ? (
        <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary rounded-full inline-block">{cta}</a>
      ) : (
        <button className="px-4 py-2 bg-primary rounded-full">{cta}</button>
      )}
    </div>
  </div>
)

export default function HowTo(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-extrabold mb-6">COMECE A JOGAR EM APENAS 1 MINUTO</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step num={1} title="ENTRE NO NOSSO DISCORD" children={'Entre na nossa comunidade e fique por dentro de todas as novidades.'} cta={'ENTRAR NO DISCORD'} ctaLink={'https://discord.gg/PhbfXkHDNc'} />
          <Step num={2} title="BAIXE O MULTI THEFT AUTO" children={'Faça o download do MTA:SA para começar sua jornada.'} cta={'BAIXAR MTA'} ctaLink={'https://mtasa.com'} />
          <Step num={3} title="ENTRE NA CIDADE" children={'Abra o MTA, conecte-se ao servidor e comece sua história.'} cta={'JOGAR AGORA'} ctaLink={undefined} />
        </div>
      </div>
    </section>
  )
}
