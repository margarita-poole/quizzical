import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='flex h-screen w-screen'>
      <div className='flex flex-col my-auto mx-auto'>
        <header className='text-sky-900 text-5xl font-semibold mx-auto'>
          Quizzical
        </header>
        <p className='text-sky-700 text-xl font-medium mt-3'>
          Press start to begin 5 question quiz
        </p>
        <Link to='/quiz'>
          <button className='mt-5 border-2 border-sky-700 rounded-xl mx-24 my-2 p-2 bg-sky-700 text-white'>
            Start quiz
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Homepage
