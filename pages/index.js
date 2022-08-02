import Link from 'next/link';
import Image from 'next/image';
import KudosAppImage from '/public/images/kudos-phone.webp';
import KudosApp2Image from '/public/images/kudos-phone2.webp';
import GooglePlayBadgeImage from '/public/images/google-play-badge.webp';
import AppStoreBadgeImage from '/public/images/app-store-badge.webp';

const Home = () => {
  return (
    <div className='min-h-screen h-full mt-16'>
      <section className='bg-gradient-to-br from-blue-400 to-blue-600 shadow-md p-8 pb-16 flex gap-24 items-start relative md:pr-72 lg:py-24'>
        <div className='px-4 flex flex-col items-start gap-4 md:gap-8 h-full justify-center'>
          <h1 className='text-white text-3xl md:text-5xl leading-snug'>
            Engage & Reward Employees <br /> Leading Healthy Lifestyles
          </h1>
          <Link href='/plans'>
            <button className='py-4 px-6 bg-white text-slate-900 rounded-md hover:shadow-lg transition-all duration-300 font-medium text-xs md:text-base'>
              Sign up now
            </button>
          </Link>
        </div>
        <div className='hidden md:flex absolute right-16 w-52 lg:w-72'>
          <div className='mt-40 lg:mt-24 z-10'>
            <Image src={KudosAppImage} width={240} height={480} />
          </div>
          <div className='mt-48 lg:mt-32 -ml-16 lg:-ml-24'>
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
    </div>
  );
};

export default Home;
