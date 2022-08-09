import FormattedCurrency from '../UI/FormattedCurrency.component';

const FeatureButton = ({ addon, fun, priceDiff }) => {
  const { id, name } = addon;

  return (
    <button className={'btn flex justify-between px-2 py-1 cursor-pointer border rounded-md transition-all duration-200'} onClick={fun}>
      <div>{name}</div>
      <div className='flex items-center text-gray-400 transition-all duration-200 opacity-0' onClick={e => e.stopPropagation()}>
        + <FormattedCurrency value={priceDiff} onClick={e => e.stopPropagation()} />
      </div>
    </button>
  );
};

export default FeatureButton;
