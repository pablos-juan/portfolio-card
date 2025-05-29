import { Undo2 } from 'lucide-react'

export function About ({ setFlip }) {
  return (
    <section className='h-full w-full md:p-6 p-5 flex flex-col gap-4'>
      <div className='h-fit flex justify-between items-center'>
        <h2 className='text-6xl text-green-900 font-bold'>
          About
        </h2>

        <button
          className='flex items-center gap-1 bg-green-200 p-4 rounded-full text-green-900 leading-4.5 font-medium cursor-pointer active:scale-105 hover:bg-white/80 transition-all duration-200'
          onClick={(prev) => setFlip(!prev)}
        >
          <Undo2 className='w-6 md:w-auto h-6' />
        </button>
      </div>

      <div className='text-green-900 flex flex-col justify-between gap-6 md:gap-2 h-full'>
        <p className='font-medium text-2xl leading-7.5 md:leading-6 md:text-lg'>
          Soy Juan Pablo, estudiante de <strong>Tecnología de Software en la Universidad Surcolombiana</strong>. Vivo en Neiva, aunque estoy <span className='text-teal-700 font-semibold'>dispuesto a cambiar de ciudad</span>. Empecé explorando lenguajes Backend, pero gracias a mis amigos descubrí mi pasión el <strong>desarrollo Frontend</strong>.
        </p>

        <div className='bg-white h-full' />

        <div className='bg-green-950/90 text-green-100 font-semibold rounded-lg p-3 flex flex-col md:flex-row justify-start gap-4'>
          <h3 className='min-w-48 text-5xl md:text-4xl font-bold'>
            Que hago?
          </h3>

          <div className='text-xl md:text-base'>
            <p className='mb-2'>
              Me especializo en desarrollo Frontend y disfruto cuidar los detalles en cada proyecto. Uso tecnologías como <span className='text-white font-bold'>TypeScript, React y Astro</span>, además de Git y GitHub para organizar y documentar mi trabajo.
            </p>

            <p>
              <span className='text-white font-bold'>Busco mi primera oportunidad profesional</span>, remota o presencial, para seguir creciendo y aportar en proyectos reales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
