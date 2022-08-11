import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '/public/images/logo.webp';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { useState } from 'react';

const Header = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const toggleMenu = e => (e.target.id === 'logo' ? setExpanded(false) : setExpanded(!isExpanded));

  const showMore = () => setVisible(!isVisible);

  return (
    <header className='shadow-md w-full flex justify-center font-semibold text-2xl fixed top-0 left-0 bg-white z-50 px-4'>
      <div className='w-full h-16 py-2 flex items-center justify-between [&>*]:cursor-pointer'>
        <Link href='/'>
          <div id='logo' className='text-sky-500 cursor-pointer font-dongle text-6xl pt-2 font-light flex gap-2' onClick={toggleMenu}>
            <Image src={LogoImage} alt='KudosHealth logo' height={48} width={48} layout='fixed' />
            KudosHealth
          </div>
        </Link>
        <ul className='space-between items-center gap-1 text-base text-slate-900 navbar-list hidden md:flex'>
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href='/about'>
            <li className='about relative'>
              About
              <ul className='hidden shadow-md absolute top-16 border-t-2 -left-8 bg-white'>
                <Link href='/about#kudoshealth'>
                  <li>KudosHealth</li>
                </Link>
                <Link href='/about#kudoscoins'>
                  <li>KudosCoins</li>
                </Link>
                {/* Here add more subnavigation elements as above */}
              </ul>
            </li>
          </Link>
          <Link href='/contact-us'>
            <li>Contact Us</li>
          </Link>
          <Link href='/select-plans'>
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

            <li
              className='about-mobile flex flex-col items-center'
              onClick={() => {
                showMore();
              }}
            >
              <span className='transition-all underline underline-offset-2 decoration-transparent hover:decoration-blue-600 hover:text-blue-600'>About</span>
              <ul className={`list-mobile flex flex-col text-base w-full ${isVisible ? '' : 'hidden'}`}>
                <Link href='/about#kudoshealth'>
                  <li>KudosHealth</li>
                </Link>
                <Link href='/about#kudoscoins'>
                  <li>KudosCoins</li>
                </Link>
                {/* Here add more subnavigation elements as above */}
              </ul>
            </li>

            <Link href='/contact-us'>
              <li onClick={toggleMenu}>Contact Us</li>
            </Link>
            <Link href='/plans'>
              <li onClick={toggleMenu}>
                <button className='text-base mt-4 w-3/4 bg-blue-500 hover:bg-blue-600 p-4 rounded-lg text-white'>Sign up</button>
              </li>
            </Link>
          </ul>
        </section>
      </div>
    </header>
  );
};

export default Header;
