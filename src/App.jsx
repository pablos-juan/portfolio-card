import { useState } from 'react'
import { Home } from './components/Home'
import { Undo2 } from 'lucide-react'

export function App () {
  const [flip, setFlip] = useState(false)

  const handleFlip = () => {
    setFlip(!flip)
  }

  return (
    <main className='flex items-center justify-center h-[1125px] md:h-full w-full'>
      <section
        className='relative bg-green-300/20 w-full h-full md:w-200 md:h-[475px] rounded-2xl gap-2 md:gap-4 border-7 border-green-600/90 shadow-xl/20'
        onClick={handleFlip}
      >
        <div className={`absolute inset-0 w-full h-full backface-hidden transition-all duration-500 ${flip ? 'opacity-0 rotate-y-180' : 'opacity-100'}`}>
          <Home />
        </div>

        <div className={`absolute inset-0 w-full h-full backface-hidden transition-all duration-500 ${flip ? 'opacity-100' : 'opacity-0 rotate-y-180'}`}>
          <div className='md:grid md:place-items-center h-full m-2'>
            <p className='flex items-center gap-4 bg-green-200 p-4 rounded-lg text-green-900 leading-4.5 font-medium cursor-pointer active:scale-105 hover:bg-white/80 transition-all duration-200'>
              Esta sección está en construcción, presione aquí para volver...
              <Undo2 className='w-10 md:w-auto h-auto' />
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
