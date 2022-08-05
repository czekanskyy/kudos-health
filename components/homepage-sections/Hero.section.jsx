import Link from 'next/link';
import Image from 'next/image';
import KudosAppImage from '/public/images/kudos-phone.webp';
import KudosApp2Image from '/public/images/kudos-phone2.webp';
import HeroImage from '/public/images/hero-image.webp';

const HeroSection = () => {
  return (
    <section className='hero-section shadow-md p-8 pb-16 flex gap-24 items-start relative md:pr-72 lg:py-24'>
      <div className='px-4 flex flex-col items-start gap-4 md:gap-8 h-full justify-center'>
        <h1 className='text-white text-3xl md:text-5xl leading-snug'>
          Engage & Reward Employees <br /> Leading Healthy Lifestyles
        </h1>
        <Link href='/plans'>
          <button className='py-4 px-6 bg-white text-slate-900 rounded-md hover:shadow-lg transition-all duration-300 font-medium text-xs md:text-base'>
            Subscription
            <br />
            plans
          </button>
        </Link>
      </div>
      <div className='hidden md:flex absolute right-16 w-52 lg:w-72'>
        <div className='mt-40 lg:mt-4 z-10'>
          <Image src={KudosAppImage} alt='KudosHealthApp main screen' width={240} height={480} />
        </div>
        <div className='mt-48 lg:mt-12 -ml-16 lg:-ml-24'>
          <Image src={KudosApp2Image} alt='KudosHealthApp rewards screen' width={200} height={400} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
