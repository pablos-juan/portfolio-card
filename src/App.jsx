import { Github, Linkedin, Mail } from 'lucide-react'
import { AstroIcon } from './components/AstroIcon'
import { ReactIcon } from './components/ReactIcon'
import { TailwindIcon } from './components/TailwindIcon'
import { TypeScriptIcon } from './components/TypeScriptIcon'
import { Link } from './components/Link'

export function App () {
  return (
    <main className='flex items-center justify-center h-full w-full'>
      <section className='bg-green-600/20 w-full md:w-200 h-fit rounded-2xl p-4 gap-4 md:gap-0 border-7 border-green-600 shadow-xl/20 flex flex-col items-center justify-center'>
        <article className='flex flex-col md:flex-row items-center gap-6 p-4 rounded hover:scale-105 transition-all duration-300'>
          <img
            src='public/avatar.webp'
            alt='avatar'
            className='h-42 w-42 rounded-full border-3 border-green-700'
          />
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col-reverse md:flex-row gap-2 md:gap-4 items-center'>
              <h1 className='text-green-800 font-bold text-4xl'>
                Hola, soy Pablo
              </h1>

              <span className='h-fit bg-green-50 text-green-800 text-sm me-2 px-2 py-1 rounded-sm font-bold  relative'>
                <span className='absolute flex size-3 top-0 right-0 -mt-1 -mr-1'>
                  <span className='absolute inline-block h-full w-full animate-ping rounded-full bg-green-400/70' />
                  <span className='relative inline-flex size-3 rounded-full bg-green-400' />
                </span>
                Disponible para trabajar
              </span>
            </div>
            <p className='text-green-900 leading-6.5 text-xl opacity-80'>
              Estudiante de Software en la <strong>Universidad Surcolombiana</strong>, con residencia en Neiva. <span className='text-teal-700 font-semibold'>Tengo experiencia práctica en desarrollo Front-End</span> y estoy abierto a cualquier oportunidad laboral.
            </p>
          </div>
        </article>

        <div className='flex flex-col md:flex-row gap-4 md:gap-0 h-fit w-full'>
          <section className='flex flex-col-reverse md:flex-col justify-center gap-2 md:px-4 rounded hover:scale-105 transition-all duration-300 md:w-2/3'>
            <div className='flex flex-col md:flex-row gap-3'>
              <article className='border-2 border-green-700 rounded md:w-1/2 h-20 flex items-end w-full' />
              <article className='border-2 border-green-700 rounded md:w-1/2 h-20 flex items-end w-full' />
            </div>

            <div className='bg-green-50/80 py-2 px-3 rounded'>
              <div className='flex w-full items-center'>
                <h2 className='text-green-800 font-bold text-2xl mr-3'>
                  Proyectos
                </h2>

                <ReactIcon />
                <AstroIcon />
                <TailwindIcon />
                <TypeScriptIcon />
              </div>

              <p className='text-sm text-green-800 leading-5'>
                Proyectos personales donde practico distintas tecnologías Frontend modernas. Cada uno representa un paso en mi evolución como desarrollador.
              </p>
            </div>
          </section>

          <section className='flex h-fit flex-col justify-center gap-1 p-4 rounded hover:scale-105 transition-all duration-300 md:w-1/3'>
            <div className='flex gap-2 w-full flex-wrap'>
              <Link href='mailto:pabloccsanchez@gmail.com'>
                <Mail className='h-4' />
                Mail
              </Link>

              <Link href='www.linkedin.com/in/pablo-castaño-sanchez-32697b277'>
                <Linkedin className='h-4' />
                LinkedIn
              </Link>

              <Link href='https://github.com/pablos-juan'>
                <Github className='h-4' />
                GitHub
              </Link>
            </div>

            <h2 className='text-green-800 text-2xl font-bold mt-2'>
              Contacto
            </h2>

            <p className='text-sm text-green-800'>
              Actualmente estoy en búsqueda de mi primera oportunidad laboral como desarrollador Frontend.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
