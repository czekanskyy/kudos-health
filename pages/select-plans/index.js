import { useState, useEffect } from 'react';
import InputBox from '../../components/select-plans-page/InputBox.component';
import FeaturesTable from '../../components/select-plans-page/FeaturesTable.component';
import PlanWrapper from '../../components/select-plans-page/PlanWrapper.section';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

// FIXME: plans data as an object - should be replaced by api call to database but for now it's located in ~/data/plans.js
import plans from '../../data/plans';

const SelectPlansPage = () => {
  const [tableVisibility, setTableVisibility] = useState(false); // visibility of fatures table will be changing based on viewport
  const [inpValue, setInpValue] = useState('');
  const maxInpValue = plans[plans.length - 1].maxEmployees; // maximum input value is set to 999999 based on maxEmployees of a highest plan
  const [display, setDisplay] = useState('hidden'); // visibility of warning when user tries to exceed max input value

  // FUNCTION: this fun will pick plan based on the user input and plans from database
  const pickPlans = numEmployees => {
    let num = Number(numEmployees);
    num = num === 0 || num === 1 ? 2 : num;
    for (const obj of plans) {
      if (num >= obj.minEmployees && num <= obj.maxEmployees) return obj;
    }
  };

  const handleInput = event => {
    setDisplay('hidden');
    let input = Number(event.target.value);
    setInpValue(input);
    // show warning when input exceeds max value
    if (input > maxInpValue) {
      setDisplay('');
      event.target.value = maxInpValue;
      setInpValue(maxInpValue);
      input = maxInpValue;
    }
    // write input value to sessionStorage
    sessionStorage.setItem('inpValue', input);
  };

  const toggleTable = () => setTableVisibility(!tableVisibility);

  // FUNCTION: this fun changes features table visibility based on viewport
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
