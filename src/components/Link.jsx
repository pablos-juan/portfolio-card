export function Link ({ children, href }) {
  return (
    <a
      href={href}
      className='h-fit text-teal-800 bg-white text-sm px-2.5 md:px-2 py-1.5 md:py-1 rounded-full font-bold border-1 border-teal-800/50 hover:bg-teal-500/20 transition-all duration-200 flex items-center gap-0.5 leading-0 w-fit active:scale-110'
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  )
}
