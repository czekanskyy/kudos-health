import Link from 'next/link';

const Header = () => {
  return (
    <header className='shadow-md w-full flex justify-center font-semibold text-2xl fixed top-0 left-0 bg-white z-50 px-4'>
      <div className='w-full max-w-6xl h-16 py-2 flex items-center justify-between [&>*]:cursor-pointer'>
        <Link href='/'>
          <div className='text-blue-500 cursor-pointer'>KudosHealth</div>
        </Link>
        <ul className='flex space-between items-center gap-8 text-base text-slate-900'>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <Link href='/plans'>
            <li>
              <button className='text-sm transition-all bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white'>Sign up</button>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
