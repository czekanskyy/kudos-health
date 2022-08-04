// Images
import HandsImage from '/public/images/hands.webp';
import FitImage from '/public/images/fit.webp';
import IdeaImage from '/public/images/bulb.webp';
import SmartwatchImage from '/public/images/smartwatch.webp';
import GiftBagsImage from '/public/images/gift-bags.webp';
import MedicalInspectionImage from '/public/images/medical-inspection.webp';
import KudosAppImage from '/public/images/kudos-phone.webp';
import KudosApp2Image from '/public/images/kudos-phone2.webp';
import GooglePlayBadgeImage from '/public/images/google-play-badge.webp';
import AppStoreBadgeImage from '/public/images/app-store-badge.webp';
// Components
import Link from 'next/link';
import Image from 'next/image';
import Card from '../components/Card';
import OfferCard from '../components/OfferCard';
import FeaturesCard from '../components/FeaturesCard';

const Home = () => {
  return (
    <div className='min-h-screen h-full mt-16 mb-12 flex flex-col items-center'>
      <section className='bg-gradient-to-br w-full from-blue-400 to-blue-600 shadow-md p-8 pb-16 flex gap-24 items-start relative md:pr-72 lg:py-24'>
        <div className='px-4 flex flex-col items-start gap-4 md:gap-8 h-full justify-center'>
          <h1 className='text-white text-3xl md:text-5xl leading-snug'>
            Engage & Reward Employees <br /> Leading Healthy Lifestyles
          </h1>
          <Link href='/plans'>
            <button className='py-4 px-6 bg-white text-slate-900 rounded-md hover:shadow-lg transition-all duration-300 font-medium text-xs md:text-base'>
              View plans
            </button>
          </Link>
        </div>
        <div className='hidden md:flex absolute right-16 w-52 lg:w-72'>
          <div className='mt-40 lg:mt-4 z-10'>
            <Image src={KudosAppImage} width={240} height={480} />
          </div>
          <div className='mt-48 lg:mt-12 -ml-16 lg:-ml-24'>
            <Image src={KudosApp2Image} width={200} height={400} />
          </div>
        </div>
      </section>
      <section className='flex flex-col md:hidden p-8 items-center gap-4'>
        <h2 className='text-2xl font-semibold'>Download our App</h2>
        <div className='flex'>
          <Link href='https://apps.apple.com/us/app/kudoshealth/id1457996773?uo=4&at=11l6hc&app=itunes&ct=fnd'>
            <button>
              <Image src={AppStoreBadgeImage} alt='Download on the App Store' width={196} height={64} />
            </button>
          </Link>
          <Link href='https://play.google.com/store/apps/details?id=com.kudoshealth.mobileapp4'>
            <button>
              <Image src={GooglePlayBadgeImage} alt='Get it on Google Play' width={160} height={64} />
            </button>
          </Link>
        </div>
      </section>
      <section className='mt-64 p-4 text-slate-500 flex flex-col gap-16'>
        <h2 className='text-3xl flex flex-col gap-8 items-center'>
          <span>
            Our concept is <span className='font-gloria'>simple</span>,
          </span>
          <span>affordable gamification of workplace health initiatives</span>
        </h2>
        <Card title='Inclusivity' image={HandsImage}>
          Engage and reward all your employees of all fitness levels & activities across the globe, without disrupting their existing activity choices
        </Card>
        <Card title='Innovation' image={IdeaImage} imgRight={true}>
          Create fun, competitive challenges driven by an individual&apos;s ability, calorie burn and activity intensity, and not just &apos;Steps&apos; which
          favours the fittest employees
        </Card>
        <Card title='Integration' image={FitImage}>
          Connect to the employees existing popular fitness tracking app&apos;s and devices for automated data collection and simple participation
        </Card>
      </section>
      <section className='mt-8 p-8 text-white flex flex-col items-center gap-16 bg-gradient-to-br w-full from-blue-400 to-blue-600 pb-20'>
        <h2 className='text-3xl flex flex-col gap-8 items-center'>What's waiting for you?</h2>
        <div className='max-w-6xl w-full flex flex-col md:flex-row items-center justify-center px-4 gap-8'>
          <OfferCard title='Employee Health Rewards Shop' image={SmartwatchImage}>
            Your very own self-service health rewards just for your Employees
          </OfferCard>
          <OfferCard title='Branded Health Rewards Shop' image={GiftBagsImage}>
            Giving Employee access to rewards you don&apos;t have to pay for
          </OfferCard>
          <OfferCard title='Health Insurer Rewards' image={MedicalInspectionImage}>
            Spread the cost of promoting health to your Employee&apos;s, get your Health Insurer involved
          </OfferCard>
        </div>
      </section>
      <section>
        <FeaturesCard title='Challenges' id={1} colors={{ outline: 'outline-red-300', iconBg: 'bg-red-300', iconFront: 'red[500]' }}>
          Create your very own custom “step like” challenges & competitions which engages employees&apos; of all levels of fitness, so runner&apos;s,
          walker&apos;s, cyclist and everything in between can compete together in one initiative.
        </FeaturesCard>
      </section>
    </div>
  );
};

export default Home;
