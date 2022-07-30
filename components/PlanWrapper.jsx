import Plan from './Plan';

const PlanWrapper = ({ obj }) => {
  const planObj = obj;
  return (
    <section className='w-full flex justify-evenly max-w-6xl gap-6 sticky top-0 pt-20 pb-2 px-4 mb-16 bg-gray-50'>
      <div className='w-56 text-slate-900 font-semibold text-2xl'>Plans</div>
      <Plan planName='Free' textClass='text-purple-500' btnClass='btnFree' price={planObj.priceFree} coins={planObj.coinsFree} isFree={true} />
      <Plan planName='Standard' textClass='text-blue-500' btnClass='btnStandard' themeColors='blue' price={planObj.priceStd} coins={planObj.coinsStd} />
      <Plan planName='Plus' textClass='text-green-500' btnClass='btnPlus' themeColors='green' price={planObj.pricePlus} coins={planObj.coinsPlus}>
        <div className='absolute -top-[2px] -right-[2px] overflow-hidden w-28 h-28'>
          <div className='bg-green-500 flex items-center justify-center text-xs relative rotate-45 text-white p-2 w-36 top-6'>MOST POPULAR</div>
        </div>
      </Plan>
      <Plan planName='Pro' textClass='text-slate-500' btnClass='btnPro' themeColors='yellow' price={planObj.pricePro} coins={planObj.coinsPro} />
    </section>
  );
};

export default PlanWrapper;
