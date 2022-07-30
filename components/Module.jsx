import { ChevronDownIcon } from '@heroicons/react/solid';
import useCollapse from 'react-collapsed';
import { useState, useEffect } from 'react';
import FormattedCurrency from './FormattedCurrency';

// TODO redirect to Homepage when visited by the link

const Module = ({ addons, name, props, passFunction }) => {
  const { getCollapseProps, getToggleProps } = useCollapse();
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
      <div className='header text-lg' {...getToggleProps()}>
        <div className='w-full flex items-center justify-between font-semibold p-3'>
          {name}
          <ChevronDownIcon width={20} height={20} />
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className='px-3 pb-3 gap-2 flex flex-col'>
          {addons.map(addon => (
            <button
              className={'btn flex justify-between px-2 py-1 cursor-pointer border rounded-md transition-all duration-200'}
              key={addon.id}
              onClick={toggleButton}
            >
              <div className='text-lg'>{addon.name}</div>
              <div className='flex items-center text-gray-400 transition-all duration-200 opacity-0' onClick={e => e.stopPropagation()}>
                + <FormattedCurrency value={priceDiff} onClick={e => e.stopPropagation()} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Module;
