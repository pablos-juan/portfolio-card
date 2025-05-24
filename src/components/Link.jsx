export function Link ({ children, href }) {
  return (
    <a
      href={href}
      className='h-fit text-green-800 bg-white text-sm px-2.5 md:px-2 py-1.5 md:py-1 rounded-full font-bold border-1 border-green-800/50 hover:bg-white/50 transition-all duration-200 flex items-center gap-0.5 leading-0 w-fit active:scale-120'
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  )
}
