import { ChevronDownIcon } from '@heroicons/react/solid';
import useCollapse from 'react-collapsed';
import FeatureButton from './FeatureButton';

// TODO redirect to Homepage when visited by the link

const Module = ({ addons, name, props, passFunction, expanded, id, fun }) => {
  const config = {
    isExpanded: expanded,
  };
  const { getCollapseProps, getToggleProps } = useCollapse(config);

  const priceDiff = props.basePrice / 4;

  const toggleButton = event => {
    const target = event.target.classList.contains('btn') ? event.target : event.target.parentNode;
    event.preventDefault();
    target.classList.toggle(props.planName);
    const priceElement = target.childNodes[1];
    priceElement.classList.toggle('opacity-0');
    if (target.classList.contains(props.planName)) {
      passFunction(priceDiff);
    } else {
      passFunction(-priceDiff);
    }
  };

  return (
    <div className='collapsible w-96 bg-white rounded-md shadow-md'>
      <div
        className='header text-lg'
        {...getToggleProps({
          onClick: () => {
            !config.isExpanded ? fun(id) : fun();
          },
        })}
      >
        <div className='w-full flex items-center justify-between font-medium p-3'>
          {name}
          <ChevronDownIcon width={20} height={20} />
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className='px-3 pb-3 gap-2 flex flex-col'>
          {addons.map(addon => (
            <FeatureButton addon={addon} fun={toggleButton} priceDiff={priceDiff} key={addon.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Module;
