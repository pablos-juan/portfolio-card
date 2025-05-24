export function Project ({ title, description, href }) {
  return (
    <article className='bg-green-200 hover:shadow-xl rounded md:w-1/2 h-22 flex items-end w-full group relative overflow-hidden'>
      <div className='relative h-full w-full flex items-end p-2.5'>
        <h3 className='absolute inset-x-4 opacity-100 group-hover:opacity-0 group-active:opacity-0 transition-all duration-100 ease text-xl text-green-800 font-semibold leading-5.5'>
          {title}
        </h3>

        <p className='absolute inset-x-4 opacity-0 group-hover:opacity-100 group-active:opacity-100 duration-300 text-sm text-green-800 leading-4'>
          {description}
          <a
            href={href}
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            Ver en GitHub
          </a>
        </p>
      </div>
    </article>
  )
}
