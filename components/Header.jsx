import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '/public/images/logo.webp';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { useState } from 'react';

const Header = () => {
  const [isExpanded, setExpanded] = useState(false);
  const toggleMenu = e => (e.target.id === 'logo' ? setExpanded(false) : setExpanded(!isExpanded));
  return (
    <header className='shadow-md w-full flex justify-center font-semibold text-2xl fixed top-0 left-0 bg-white z-50 px-4'>
      <div className='w-full h-16 py-2 flex items-center justify-between [&>*]:cursor-pointer'>
        <Link href='/'>
          <div id='logo' className='text-sky-500 cursor-pointer font-dongle text-6xl pt-2 font-light flex gap-2' onClick={toggleMenu}>
            <Image src={LogoImage} alt='KudosHealth logo' height={48} width={48} layout='fixed' />
            KudosHealth
          </div>
        </Link>
        <ul className='space-between items-center gap-8 text-base text-slate-900 navbar-list hidden md:flex'>
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
        <button className='text-slate-900 py-2 md:hidden' onClick={toggleMenu}>
          {isExpanded ? <XIcon width={36} height={36} /> : <MenuIcon width={36} height={36} />}
        </button>
        <section className={`absolute top-16 left-0 bg-white py-4 w-full shadow-md ${isExpanded ? 'box' : 'hidden'} md:hidden`}>
          <ul className='mobile-menu flex flex-col items-center justify-center'>
            <Link href='/'>
              <li onClick={toggleMenu}>Home</li>
            </Link>
            <Link href='/about'>
              <li onClick={toggleMenu}>About</li>
            </Link>
            <Link href='/contact'>
              <li onClick={toggleMenu}>Contact Us</li>
            </Link>
            <Link href='/plans'>
              <li onClick={toggleMenu}>
                <button className='text-sm bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white'>Sign up</button>
              </li>
            </Link>
          </ul>
        </section>
      </div>
    </header>
  );
};

export default Header;
