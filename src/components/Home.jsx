import { Github, Linkedin, Mail } from 'lucide-react'
import { AstroIcon } from '../components/icons/AstroIcon'
import { ReactIcon } from '../components/icons/ReactIcon'
import { TailwindIcon } from '../components/icons/TailwindIcon'
import { TypeScriptIcon } from '../components/icons/TypeScriptIcon'
import { Link } from '../components/Link'
import { Project } from './Project'

export function Home ({ handleFlip }) {
  return (
    <section className='flex flex-col justify-center h-full p-5 gap-2 md:gap-3'>
      <article
        className='flex flex-col md:flex-row items-center gap-6 rounded p-2 hover:bg-white/70 hover:shadow-xl cursor-pointer active:bg-white transition-all duration-300'
        onClick={handleFlip}
      >
        <img
          src='/avatar.webp'
          alt='avatar'
          className='h-42 w-42 rounded-full border-3 border-green-700'
        />
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col-reverse md:flex-row gap-2 md:gap-4 items-center'>
            <h1 className='text-green-800 font-bold text-4xl'>
              Hola, soy Pablo
            </h1>

            <span className='h-fit bg-white/80 border-1 border-green-800/50 text-green-800 text-sm me-2 px-2 py-1 rounded-sm font-bold relative'>
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

      <div className='flex flex-col md:flex-row gap-8 md:gap-4 h-fit w-full'>
        <section className='flex flex-col-reverse md:flex-col justify-center gap-2 rounded active:bg-white transition-colors duration-200 h-fit md:w-2/3'>
          <div className='flex flex-col md:flex-row gap-3'>
            <Project
              title='Demo E-commerce'
              description='Tienda online con catálogo filtrable, búsqueda instantánea y carrito sincronizado en toda la aplicación... '
              href='https://github.com/pablos-juan/stride-ecomerce'
            />

            <Project
              title='Calculadora de Propinas'
              description='Calcula el monto, personaliza el porcentaje, divide la cuenta y guarda combinaciones para reutilizarlas... '
              href='https://github.com/pablos-juan/tip-calculator'
            />
          </div>

          <div
            className='hover:bg-green-900/90 hover:shadow-xl bg-green-950/90 cursor-pointer transition-all duration-300 p-3 rounded-xl'
            onClick={handleFlip}
          >
            <div className='flex w-full justify-between items-center mb-1'>
              <h2 className='text-white font-bold text-2xl mr-3'>
                Proyectos
              </h2>

              <div className='flex'>
                <ReactIcon />
                <AstroIcon />
                <TailwindIcon />
                <TypeScriptIcon />
              </div>
            </div>

            <p className='text-sm text-white leading-4.5'>
              Proyectos personales desarrollados para aprender y poner en práctica mis habilidades en distintas tecnologías Frontend. Reflejan mi progreso y compromiso con el aprendizaje continuo.
            </p>
          </div>
        </section>

        <section className='flex h-full flex-col justify-between gap-2 md:w-1/3'>
          <div className='flex px-2 gap-2 w-full flex-wrap'>
            <Link href='mailto:pabloccsanchez@gmail.com'>
              <Mail className='h-4' />
              Mail
            </Link>

            <Link href='https://www.linkedin.com/in/pablo-casta%C3%B1o-sanchez-32697b277/'>
              <Linkedin className='h-4' />
              LinkedIn
            </Link>

            <Link href='https://github.com/pablos-juan'>
              <Github className='h-4' />
              GitHub
            </Link>
          </div>

          <div
            className='px-4 py-2 rounded active:bg-white hover:bg-white/70 hover:shadow-xl cursor-pointer transition-all duration-300 text-teal-700'
            onClick={handleFlip}
          >
            <h2 className='text-2xl font-bold'>
              Contacto
            </h2>

            <p className='text-lg md:text-base leading-5.5'>
              Actualmente estoy en búsqueda de mi primera oportunidad laboral como desarrollador Frontend.
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}
