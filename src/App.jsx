import { useState } from 'react'
import { Home } from './components/Home'
import { ABOUT, CONTACT, PROJECTS } from '../constants/constants'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

const CARD_LAYOUT = 'bg-green-300/20 w-full h-full rounded-2xl gap-2 md:gap-4 border-7 border-green-600/90 shadow-xl/20 absolute inset-0 backface-hidden transition-all duration-500'

export function App () {
  const [flip, setFlip] = useState(false)
  const [currentBackFace, setCurrentBackFace] = useState(null)

  const BACK_FACE = {
    [ABOUT]: <About setFlip={setFlip} />,
    [PROJECTS]: <Projects setFlip={setFlip} />,
    [CONTACT]: <Contact setFlip={setFlip} />
  }

  return (
    <main className='flex items-center justify-center h-[1125px] md:h-full w-full'>
      <div className='relative w-full h-full md:w-200 md:h-[475px]'>
        <div className={`${CARD_LAYOUT} ${flip ? 'opacity-0 rotate-y-180' : 'opacity-100'}`}>
          <Home setCurrentBackFace={setCurrentBackFace} setFlip={setFlip} />
        </div>

        <div className={`${CARD_LAYOUT} ${flip ? 'opacity-100' : 'opacity-0 rotate-y-180'}`}>
          {BACK_FACE[currentBackFace]}
        </div>
      </div>
    </main>
  )
}
