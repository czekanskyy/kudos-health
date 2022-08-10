import { useState, useEffect } from 'react';
import CheckoutBox from '../../components/add-features-page/CheckoutBox.component';
import ModuleWrapper from '../../components/add-features-page/ModuleWrapper.section';
import useStorage from '../../hooks/useStorage';
import { useRouter } from 'next/router';

const AddFeaturesPage = () => {
  // get data from sessionStorage (data from prev page)
  const basePrice = Number(useStorage('price'));
  const planName = useStorage('planName');
  const numEmployees = useStorage('inpValue') || 1;
  const coins = useStorage('coins');

  const router = useRouter();

  const [pageLoaded, setPageLoaded] = useState(false);
  const [addonsCost, setAddonsCost] = useState(0);

  // IMPORTANT: Check if page is loaded to prevent user to access /add-features page w/o passing info
  useEffect(() => {
    const onPageLoad = () => {
      setPageLoaded(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  if (pageLoaded) {
    if (!basePrice || !planName || !coins) router.push('/select-plans');
  }

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
