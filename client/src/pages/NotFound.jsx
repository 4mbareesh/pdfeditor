import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='grid h-screen place-content-center bg-white px-4 select-none'>
      <div className='text-center'>
        <h1 className='text-9xl font-black text-gray-200'>404</h1>
        <p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Uh-oh!</p>
        <p className='mt-4 text-gray-500'>We can&apos;t find that page.</p>
        <Link
          to={'/'}
          className='mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring hover:rounded-lg transition-all duration-150'
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
