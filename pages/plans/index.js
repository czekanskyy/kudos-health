import { useState } from 'react';
import InputBox from '../../components/InputBox';
import FeaturesTable from '../../components/FeaturesTable';
import PlanWrapper from '../../components/PlanWrapper';

import plans from '../../data/plans';

const PlansPage = () => {
  const maxInpValue = plans[plans.length - 1].maxEmployees;
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

  const planObj = pickPlans(inpValue);
  return (
    <div className='flex flex-col items-center justify-start w-full min-h-screen pt-20 font-poppins'>
      <InputBox onChangeHandler={handleInput} display={display} val={inpValue} />
      <PlanWrapper obj={planObj} />
      <FeaturesTable />
    </div>
  );
};

export default PlansPage;
