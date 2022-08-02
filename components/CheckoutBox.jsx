import FormattedCurrency from '../components/FormattedCurrency';
import { DatabaseIcon } from '@heroicons/react/solid';
import useStorage from '../hooks/useStorage';

const CheckoutBox = ({ planName, numEmployees, basePrice, addonsCost, coins }) => {
  const textColor = useStorage('textClass');

  return (
    <div className='w-96 mb-8 md:mb-0 p-4 bg-white rounded-md shadow-md flex flex-col items-start gap-2 order-2 md:order-1'>
      {/* title */}
      <h2 className='flex justify-start items-center text-2xl gap-2 font-medium mb-2'>Plan details</h2>
      <hr className='w-full' />

      {/* plan details */}
      <p className='flex items-center justify-between w-full'>
        Selected plan: <span className={`font-extrabold ${textColor}`}>{planName}</span>
      </p>
      <p className='flex items-center justify-between w-full'>
        Number of employees: <span className={'font-semibold'}>{numEmployees}</span>
      </p>
      <p className='flex items-center justify-between w-full'>
        <span className='flex items-center gap-1'>
          <DatabaseIcon width={20} height={20} className='text-amber-500' />
          Kudos Coins:
        </span>
        <span className={'font-semibold'}>{coins}</span>
      </p>
      <hr className='w-full' />

      {/* price details */}
      <p className='flex items-center justify-between w-full'>
        Base price:{' '}
        <span className={'font-semibold'}>
          <FormattedCurrency value={basePrice} />
        </span>
      </p>
      <p className='flex items-center justify-between w-full'>
        Bonus Modules:{' '}
        <span className={'font-semibold text-gray-500 text-sm'}>
          +
          <FormattedCurrency value={addonsCost} />
        </span>
      </p>
      <p className='flex items-center justify-between w-full font-medium mt-2'>
        Total:{' '}
        <span className='font-bold flex items-center gap-1'>
          <FormattedCurrency value={basePrice + addonsCost} />
          <span className='text-gray-400 font-medium text-xs'>p/m</span>
        </span>
      </p>
      <button className={`flex items-center justify-center w-full p-2 text-white font-semibold rounded-md transition-all mt-4 btn${planName}`}>Sign up</button>
    </div>
  );
};

export default CheckoutBox;
