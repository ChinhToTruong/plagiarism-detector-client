import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-white text-3xl gap-2'>
      <h1 className='px-4 text-center font-bold uppercase'>404 Page Not Found</h1>
      <Link to={"/"} className='text-lg hover:text-blue-300'>click here to back home page</Link>
    </div>
  )
}

export default NotFound