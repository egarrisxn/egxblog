export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className='mx-auto flex w-full max-w-7xl items-center justify-between border-t-2 p-4'>
      <section className='flex 2xl:text-xl'>EG | {date}</section>
      <section className='flex gap-3 2xl:text-xl'>
        <a href='https://github.com/egarrisxn' target='_blank' rel='noopener noreferrer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.2em'
            height='1.2em'
            viewBox='0 0 24 24'
            className='hover:text-green-400'
          >
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21'
            ></path>
          </svg>
        </a>
        <a href='https://linkedin.com/in/ethan-gx' target='_blank' rel='noopener noreferrer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.2em'
            height='1.2em'
            viewBox='0 0 24 24'
            className='hover:text-green-400'
          >
            <g
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            >
              <path d='M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 5v5m0-8v.01M12 16v-5'></path>
              <path d='M16 16v-3a2 2 0 0 0-4 0'></path>
            </g>
          </svg>
        </a>
        <a
          href='https://bsky.app/profile/egxo.bsky.social'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.2em'
            height='1.2em'
            viewBox='0 0 24 24'
            className='hover:text-green-400'
          >
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='m2.753 4.514l.434 5.853a3.354 3.354 0 0 0 3.345 3.106h.702l-.51.291a5.94 5.94 0 0 0-2.447 2.677a2.655 2.655 0 0 0 .74 3.17l.972.787c1.226.994 3 1.236 4.085.089c.92-.974 1.32-1.914 1.405-2.128q.018-.046.032-.093l.295-.924c.111-.347.176-.707.194-1.07c.018.363.083.723.194 1.07l.295.924q.014.047.032.093c.084.214.486 1.154 1.405 2.128c1.084 1.147 2.859.906 4.085-.088l.971-.788a2.655 2.655 0 0 0 .741-3.17a5.94 5.94 0 0 0-2.447-2.676l-.51-.292h.702a3.354 3.354 0 0 0 3.345-3.106l.434-5.853c.101-1.363-1.373-2.25-2.5-1.477c-1.726 1.18-3.77 2.698-4.565 3.754c-1.41 1.872-2.117 3.559-2.182 3.719c-.065-.16-.772-1.847-2.182-3.72c-.795-1.055-2.84-2.573-4.564-3.754c-1.128-.772-2.602.115-2.5 1.478'
            ></path>
          </svg>
        </a>
        <a href='https://x.com/eg__xo' target='_blank' rel='noopener noreferrer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.2em'
            height='1.2em'
            viewBox='0 0 24 24'
            className='hover:text-green-400'
          >
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='m13.081 10.712l-4.786-6.71a.6.6 0 0 0-.489-.252H5.28a.6.6 0 0 0-.488.948l6.127 8.59m2.162-2.576l6.127 8.59a.6.6 0 0 1-.488.948h-2.526a.6.6 0 0 1-.489-.252l-4.786-6.71m2.162-2.576l5.842-6.962m-8.004 9.538L5.077 20.25'
            ></path>
          </svg>
        </a>
        <a href='https://instagram.com/eg___xo' target='_blank' rel='noopener noreferrer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.2em'
            height='1.2em'
            viewBox='0 0 24 24'
            className='hover:text-green-400'
          >
            <g
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            >
              <path d='M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z'></path>
              <path d='M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m7.5-4.5v.01'></path>
            </g>
          </svg>
        </a>
        <a href='https://open.spotify.com/user/egarrisxn' target='_blank' rel='noopener noreferrer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.2em'
            height='1.2em'
            viewBox='0 0 24 24'
            className='hover:text-green-400'
          >
            <g
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            >
              <path d='M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0'></path>
              <path d='M8 11.973c2.5-1.473 5.5-.973 7.5.527M9 15c1.5-1 4-1 5 .5M7 9c2-1 6-2 10 .5'></path>
            </g>
          </svg>
        </a>
        <a href='https://discord.com/users/eg___xo' target='_blank' rel='noopener noreferrer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.2em'
            height='1.2em'
            viewBox='0 0 24 24'
            className='hover:text-green-400'
          >
            <g
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            >
              <path d='M8 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0'></path>
              <path d='M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833-1.667 3.5-3c.667-1.667.5-5.833-1.5-11.5c-1.457-1.015-3-1.34-4.5-1.5l-.972 1.923a11.9 11.9 0 0 0-4.053 0L9 4c-1.5.16-3.043.485-4.5 1.5c-2 5.667-2.167 9.833-1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2-2 2-3'></path>
              <path d='M7 16.5c3.5 1 6.5 1 10 0'></path>
            </g>
          </svg>
        </a>
      </section>
    </footer>
  )
}
