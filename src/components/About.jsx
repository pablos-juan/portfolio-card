import { Hammer, Undo2 } from 'lucide-react'

export function About ({ setFlip }) {
  return (
    <section className='h-full w-full p-6 flex flex-col gap-5'>
      <div className='h-fit flex justify-between items-center'>
        <h2 className='text-6xl text-green-900 font-bold'>
          About
        </h2>

        <button
          className='flex items-center gap-1 bg-green-200 p-4 rounded-full text-green-900 leading-4.5 font-medium cursor-pointer active:scale-105 hover:bg-white/80 transition-all duration-200'
          onClick={(prev) => setFlip(!prev)}
        >
          <Undo2 className='w-8 md:w-auto h-8' />
        </button>
      </div>

      <div className='text-green-900 flex flex-wrap md:flex-nowrap md:gap-3 gap-10 h-full'>
        <div className='flex flex-col gap-3 justify-between md:w-1/2 font-medium text-xl md:text-base'>
          <div>
            <p className='mb-2'>
              Soy Juan Pablo, estudiante de <strong>Tecnología de Software en la Universidad Surcolombiana</strong>. Vivo en Neiva, aunque estoy <span className='text-teal-800 font-semibold'>dispuesto a cambiar de ciudad</span>. Empecé explorando lenguajes Backend, pero gracias a mis amigos descubrí mi pasión el <strong>desarrollo Frontend</strong>.
            </p>

            <p>
              Me esfuerzo por hacer bien mi trabajo, soy responsable, comprometido y <span className='text-teal-800 font-semibold'>sé adaptarme tanto al trabajo en equipo como a retos individuales</span>.
            </p>
          </div>

          <div className='w-full h-12 bg-green-300/50 flex justify-between'>
            <div className='h-full w-10 bg-linear-to-r from-green-400 to-transparent' />
            <div className='w-full flex items-center justify-center'>
              <p className='p-1 bg-green-900 text-white rounded'>
                placeholder
              </p>
            </div>
            <div className='h-full w-10 bg-linear-to-l from-green-400 to-transparent' />
          </div>
        </div>

        <div className='md:w-1/2 bg-green-950/90 text-green-100 font-semibold rounded-lg p-4 flex flex-col justify-between'>
          <h3 className='text-4xl flex items-center gap-3 font-bold'>
            <Hammer className='h-7 w-7' />
            Que hago?
          </h3>

          <div>
            <p className='text-lg md:text-base mb-2'>
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
