import Plan from './Plan.component';

const PlanWrapper = ({ obj }) => {
  const planObj = obj;
  return (
    <section
      id='features'
      className='w-full flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row justify-evenly max-w-6xl gap-6 lg:sticky top-0 pt-20 pb-2 px-12 sm:px-4 mb-16 bg-gray-50'
    >
      <div className='text-center md:text-left md:w-56 text-slate-900 font-semibold text-2xl hidden lg:flex'>Plans</div>
      <Plan planName='Starter' textClass='text-starter-500' btnClass='btn-Starter' price={planObj.priceFree} coins={planObj.coinsFree} isFree={true}>
        <div className='absolute -top-[2px] -right-[2px] overflow-hidden w-28 h-28'>
          <div className='bg-starter-500 flex items-center justify-center text-sm relative rotate-45 text-white p-1 w-36 top-6'>FREE</div>
        </div>
      </Plan>
      <Plan planName='Standard' textClass='text-standard-500' btnClass='btn-Standard' themeColors='blue' price={planObj.priceStd} coins={planObj.coinsStd} />
      <Plan planName='Pro' textClass='text-pro-500' btnClass='btn-Pro' themeColors='green' price={planObj.pricePro} coins={planObj.coinsPro}>
        <div className='absolute -top-[2px] -right-[2px] overflow-hidden w-28 h-28'>
          <div className='bg-pro-500 flex items-center justify-center text-xs relative rotate-45 text-white p-2 w-36 top-6'>MOST POPULAR</div>
        </div>
      </Plan>
      <Plan
        planName='Premium'
        textClass='text-premium-500'
        btnClass='btn-Premium'
        themeColors='yellow'
        price={planObj.pricePremium}
        coins={planObj.coinsPremium}
      />
    </section>
  );
};

export default PlanWrapper;
