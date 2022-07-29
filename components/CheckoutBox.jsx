import FormattedCurrency from '../components/FormattedCurrency';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import useStorage from '../hooks/useStorage';

const CheckoutBox = () => {
  const planName = useStorage('planName');
  const textColor = useStorage('textClass');
  const price = useStorage('price');
  const numEmployees = useStorage('inpValue') || 1;
  const finalPrice = useStorage('finalPrice');

  return (
    <div className='w-96 p-4 bg-white rounded-md shadow-md flex flex-col items-start gap-2'>
      <h2 className='flex justify-start items-center text-2xl gap-2 font-medium mb-2'>Plan details</h2>
      <hr className='flex w-full h-px bg-gray-200 border-none' />
      <p className='flex items-center justify-between w-full'>
        Selected plan: <span className={`font-extrabold ${textColor}`}>{planName}</span>
      </p>
      <p className='flex items-center justify-between w-full'>
        Number of employees: <span className={'font-bold'}>{numEmployees}</span>
      </p>
      <hr className='flex w-full h-px bg-gray-200 border-none' />
      <p className='flex items-center justify-between w-full'>
        Base price:{' '}
        <span className={'font-bold'}>
          <FormattedCurrency value={price} />
        </span>
      </p>
      <p className='flex items-center justify-between w-full'>
        Bonus Modules:{' '}
        <span className={'font-bold'}>
          <FormattedCurrency value={Number(finalPrice) - Number(price)} />
        </span>
      </p>
      <p className='flex items-center justify-between w-full font-medium mt-2'>
        Total:{' '}
        <span className={'font-extrabold'}>
          <FormattedCurrency value={finalPrice} />
        </span>
      </p>
    </div>
  );
};

export default CheckoutBox;
