export function Link ({ children, href }) {
  return (
    <a
      href={href}
      className='h-fit text-green-800 text-sm px-2 py-1 rounded-full font-bold border-1 hover:bg-green-50 transition-colors duration-200 flex items-center gap-0.5 leading-0 w-fit'
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  )
}
