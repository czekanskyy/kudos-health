import { ChevronDownIcon, CheckIcon } from '@heroicons/react/solid';
import useCollapse from 'react-collapsed';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import useStorage from '../hooks/useStorage';

const Module = ({ addons, name }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const basePrice = useStorage('price');
  const priceDiff = basePrice / 4;

  const addFeature = event => {
    console.log(event.target);
  };

  const showPrice = event => {
    const priceElement = event.target.parentNode.parentNode.parentNode.childNodes[1];
    priceElement.classList.toggle('hidden');
  };

  return (
    <div className='collapsible w-96 bg-white rounded-md shadow-md'>
      <div className='header text-lg' {...getToggleProps()}>
        <div className='w-full flex items-center justify-between font-semibold p-3'>
          {name}
          <ChevronDownIcon width={20} height={20} />
        </div>
      </div>
      <div {...getCollapseProps()}>
        <FormGroup className='px-3'>
          {addons.map(addon => (
            <div className='flex justify-between' key={addon.id}>
              <FormControlLabel control={<Checkbox onChange={showPrice} />} label={addon.name} className='text-lg' />
              <div className='flex items-center text-gray-400 hidden'>+€ {priceDiff}</div>
            </div>
          ))}
        </FormGroup>
      </div>
    </div>
  );
};

export default Module;
