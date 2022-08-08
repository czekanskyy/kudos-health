import Link from 'next/link';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-slate-400 flex justify-center w-full z-50 absolute p-4 bottom-0 text-xs md:text-base h-48 mt-16'>
      <div className='max-w-5xl w-full flex flex-col justify-center items-center gap-4'>
        <div className='flex items-center justify-between w-full'>
          <p className='font-light'>
            Copyright © {new Date().getFullYear()} <span className='font-medium text-sky-500'>KudosHealth</span> | All rights reserved.
          </p>
          <p className='text-3xl flex gap-2'>
            <a href='https://www.facebook.com/KudosHealth/' target='_blank' rel='noopener noreferrer'>
              <FaFacebookSquare className='cursor-pointer' />
            </a>
            <a href='https://twitter.com/kudoshealth/' target='_blank' rel='noopener noreferrer'>
              <FaTwitterSquare className='cursor-pointer' />
            </a>
          </p>
        </div>
        <p className='text-sm'>
          KudosHealth does not offer medical advice or diagnosis. KudosHealth score&apos;s KudosPoints & KudosCoins is generated based on data provided by the
          user and is for information purposes only. Individuals should always seek professional advice before commencing any physical activity exercise
          programme.
        </p>
        <p className='text-xs flex flex-col gap-1 items-start w-full'>
          <Link href='/'>
            <button>Privacy Policy</button>
          </Link>
          <Link href='/'>
            <button>Terms of Service</button>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
