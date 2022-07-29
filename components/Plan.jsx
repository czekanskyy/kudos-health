import { DatabaseIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const Plan = ({ children, planName, textClass, btnClass, price, coins, isFree }) => {
  const setStorage = e => {
    sessionStorage.setItem('planName', planName);
    sessionStorage.setItem('price', price);
    sessionStorage.setItem('coins', coins);
  };

  return (
    <div className='bg-white w-52 border border-gray-200 rounded-md flex flex-col gap-3 items-center p-6 transition-all shadow hover:shadow-md relative'>
      <h3 className={`text-2xl font-semibold ${textClass}`}>{planName}</h3>
      <hr className='w-2/3 bg-gray-200' />
      <p className='text-gray-500 text-xl font-medium'>€ {price.toLocaleString('ie-IE')}</p>
      <p className='text-gray-500 text-xl font-medium flex items-center gap-1'>
        <DatabaseIcon width={18} height={18} color='#fbbf24' />
        <span className=''>{coins.toLocaleString('ie-IE')}</span>
      </p>
      <Link href={isFree ? '/' : '/add-features'}>
        <button onClick={setStorage} className={`${btnClass} transition-all text-white w-24 h-10 p-2 flex items-center justify-center rounded-md mt-6`}>
          Select
        </button>
      </Link>

      {/* ribbon */}
      {children}
    </div>
  );
};

export default Plan;
