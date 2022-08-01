import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '/public/images/logo.webp';

const Header = () => {
  return (
    <header className='shadow-md w-full flex justify-center font-semibold text-2xl fixed top-0 left-0 bg-white z-50 px-4'>
      <div className='w-full h-16 py-2 flex items-center justify-between [&>*]:cursor-pointer'>
        <Link href='/'>
          <div className='text-blue-500 cursor-pointer font-dongle text-6xl pt-2 font-light flex gap-2'>
            <Image src={LogoImage} height={48} width={48} layout='fixed' />
            KudosHealth
          </div>
        </Link>
        <ul className='flex space-between items-center gap-8 text-base text-slate-900 navbar-list'>
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href='/about'>
            <li>About</li>
          </Link>
          <Link href='/contact'>
            <li>Contact Us</li>
          </Link>
          <Link href='/plans'>
            <li>
              <button className='text-sm bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white'>Sign up</button>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
