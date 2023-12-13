import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div
      className='dark:bg-gray-800 hero min-h-screen bg-cover bg-no-repeat bg-center transition duration-600'
      style={{
        backgroundImage: `url('images/2906429.jpg')`,
      }}
    >
      <div className='text-center text-white h-screen flex justify-center items-center'>
        <div className='max-w-sm flex flex-col gap-5'>
          <h1 className='text-5xl font-bold md:tracking-widest'>Pdf Editor</h1>
          <p>Edit Your PDF&apos;s on the GO!</p>
          <Link
            to={'/upload'}
            className='bg-fuchsia-500 text-white hover:bg-fuchsia-600 p-3 rounded-2xl hover:rounded-lg transition-all'
          >
            Generate Pdf
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
