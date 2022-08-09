import { useState, useEffect } from 'react';
import InputBox from '../../components/select-plans-page/InputBox';
import FeaturesTable from '../../components/select-plans-page/FeaturesTable';
import PlanWrapper from '../../components/select-plans-page/PlanWrapper';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

import plans from '../../data/plans';

const SelectPlansPage = () => {
  const maxInpValue = plans[plans.length - 1].maxEmployees;
  const [tableVisibility, setTableVisibility] = useState(false);
  const [inpValue, setInpValue] = useState('');
  const [display, setDisplay] = useState('hidden');

  const pickPlans = numEmployees => {
    let num = Number(numEmployees);
    num = num === 0 || num === 1 ? 2 : num;
    for (const obj of plans) {
      if (num >= obj.minEmployees && num <= obj.maxEmployees) return obj;
    }
  };

  const excededMax = event => {
    setDisplay('');
    event.target.value = maxInpValue;
    setInpValue(maxInpValue);
  };

  const handleInput = event => {
    setDisplay('hidden');
    const input = Number(event.target.value);
    setInpValue(input);
    sessionStorage.setItem('inpValue', input);
    if (input > maxInpValue) {
      excededMax(event);
    }
  };

  const toggleTable = () => setTableVisibility(!tableVisibility);

  const planObj = pickPlans(inpValue);
  useEffect(() => {
    if (window.innerWidth >= 768) setTableVisibility(true);
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) setTableVisibility(true);
    });
  }, [false]);

  return (
    <div className='flex flex-col items-center justify-start w-full min-h-screen pt-20 font-poppins'>
      <InputBox onChangeHandler={handleInput} display={display} val={inpValue} />
      <PlanWrapper obj={planObj} />
      <button className='bg-white p-4 mb-8 w-11/12 flex justify-between items-center rounded-md shadow-md font-medium md:hidden' onClick={toggleTable}>
        {tableVisibility ? 'Hide plan features' : 'Show plan features'}
        {tableVisibility ? <ChevronUpIcon width={32} height={32} /> : <ChevronDownIcon width={32} height={32} />}
      </button>
      <FeaturesTable visibility={tableVisibility} />
    </div>
  );
};

export default SelectPlansPage;
