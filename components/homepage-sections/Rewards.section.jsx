// Images
import SmartwatchImage from '/public/images/smartwatch.webp';
import GiftBagsImage from '/public/images/gift-bags.webp';
import MedicalInspectionImage from '/public/images/medical-inspection.webp';
// Imports
import RewardsCard from './RewardsCard.component';

const RewardsSection = () => {
  return (
    <section className='mt-8 p-8 text-white flex flex-col items-center gap-12 bg-gradient-to-br w-full from-blue-400 to-blue-600 pb-20'>
      <h2 className='text-3xl flex flex-col gap-8 items-center'>What's waiting for you?</h2>
      <div className='max-w-6xl w-full flex flex-col md:flex-row items-center justify-center px-4 gap-8'>
        <RewardsCard title='Employee Health Rewards Shop' image={SmartwatchImage}>
          Your very own self-service health rewards just for your Employees
        </RewardsCard>
        <RewardsCard title='Branded Health Rewards Shop' image={GiftBagsImage}>
          Giving Employee access to rewards you don&apos;t have to pay for
        </RewardsCard>
        <RewardsCard title='Health Insurer Rewards' image={MedicalInspectionImage}>
          Spread the cost of promoting health to your Employee&apos;s, get your Health Insurer involved
        </RewardsCard>
      </div>
    </section>
  );
};

export default RewardsSection;
