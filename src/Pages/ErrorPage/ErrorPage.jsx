
import { Link } from 'react-router-dom';
import logo from '../../assets/404.png';

const ErrorPage = () => {
  return (
    <div className='flex items-center h-screen p-16 bg-gray-100 text-gray-900 animate-fadeIn'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img src={logo} alt='' className='animate-bounce animate-scale animate-pulse' />
        <div className='max-w-md text-center'>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to homepage
          </Link>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {/* {error?.message} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
