import CheckoutBox from '../../components/CheckoutBox';
import ModuleWrapper from '../../components/ModuleWrapper';
import modules from '../../data/modules';

const AddFeaturesPage = () => {
  return (
    <div className='pt-24 flex justify-center items-start gap-8'>
      <CheckoutBox />
      <ModuleWrapper />
    </div>
  );
};

export default AddFeaturesPage;
