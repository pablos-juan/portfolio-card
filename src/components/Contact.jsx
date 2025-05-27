import { Undo2 } from 'lucide-react'

export function Contact ({ setFlip }) {
  return (
    <div className='md:grid md:place-items-center h-full w-full m-2'>
      <p
        className='flex items-center gap-1 bg-green-200 p-4 rounded-lg text-green-900 leading-4.5 font-medium cursor-pointer active:scale-105 hover:bg-white/80 transition-all duration-200'
        onClick={(prev) => setFlip(!prev)}
      >
        <strong>Contacto,</strong>presione aquí para volver...
        <Undo2 className='w-10 md:w-auto h-auto ml-2' />
      </p>
    </div>
  )
}
