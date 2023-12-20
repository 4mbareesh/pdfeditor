import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div
      className='min-h-screen transition bg-center bg-no-repeat bg-cover dark:bg-gray-800 hero duration-600'
      style={{
        backgroundImage: `url('images/2906429.jpg')`,
      }}
    >
      <div className='flex items-center justify-center h-screen text-center text-white'>
        <div className='flex flex-col max-w-sm gap-5'>
          <h1 className='text-5xl font-bold md:tracking-widest'>Pdf Editor</h1>
          <p>Edit Your PDF&apos;s on the GO!</p>
          <Link
            to={'/upload'}
            className='p-3 text-white transition-all bg-fuchsia-500 hover:bg-fuchsia-600 rounded-2xl hover:rounded-lg'
          >
            Generate Pdf
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
