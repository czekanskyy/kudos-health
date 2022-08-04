import DownloadAppSection from '../components/homepage-sections/DownloadApp.section';
import FeaturesSection from '../components/homepage-sections/Features.section';
import HeroSection from '../components/homepage-sections/Hero.section';
import OurConceptSection from '../components/homepage-sections/OurConcept.section';
import RewardsSection from '../components/homepage-sections/Rewards.section';

const Home = () => {
  return (
    <div className='min-h-screen h-full mt-16 mb-12 flex flex-col items-center'>
      <HeroSection />
      <DownloadAppSection />
      <OurConceptSection />
      <RewardsSection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
