import DownloadAppSection from '../components/home-page/DownloadApp.section';
import FeaturesSection from '../components/home-page/Features.section';
import HeroSection from '../components/home-page/Hero.section';
import OurConceptSection from '../components/home-page/OurConcept.section';
import RewardsSection from '../components/home-page/Rewards.section';

// IMPORTANT NEED TO CHANGE IMAGES OR ATTRIBUTE AUTHOR

const HomePage = () => {
  return (
    <div className='min-h-screen h-full mt-16 mb-12 flex flex-col items-center'>
      <HeroSection />
      {/* DownApp aval only on mobile view */}
      <DownloadAppSection />
      {/*  */}
      <OurConceptSection />
      <RewardsSection />
      <FeaturesSection />
    </div>
  );
};

export default HomePage;
