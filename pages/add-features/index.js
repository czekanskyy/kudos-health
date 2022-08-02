import { useState } from 'react';
import CheckoutBox from '../../components/CheckoutBox';
import ModuleWrapper from '../../components/ModuleWrapper';
import useStorage from '../../hooks/useStorage';

const AddFeaturesPage = () => {
  const basePrice = Number(useStorage('price'));
  const planName = useStorage('planName');
  const numEmployees = useStorage('inpValue') || 1;
  const coins = useStorage('coins');

  const [addonsCost, setAddonsCost] = useState(0);

  const passData = childData => {
    setAddonsCost(addonsCost + childData);
  };

  return (
    <div className='pt-24 md:px-4 lg:px-0 flex flex-col md:flex-row justify-center items-center md:items-start gap-8'>
      <CheckoutBox planName={planName} numEmployees={numEmployees} basePrice={basePrice} addonsCost={addonsCost} coins={coins} />
      <ModuleWrapper props={{ basePrice, planName }} pass={passData} />
    </div>
  );
};

export default AddFeaturesPage;
