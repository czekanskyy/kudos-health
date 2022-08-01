import Link from 'next/link';
import Image from 'next/image';
import KudosAppImage from '/public/images/kudos-phone.webp';
import KudosApp2Image from '/public/images/kudos-phone2.webp';
// import heroImage from '../public/images/man-happy.webp';

const Home = () => {
  return (
    <div className='min-h-screen h-full mt-16'>
      <section className='bg-gradient-to-br from-blue-400 to-blue-600 shadow-md p-8 h-96 flex gap-24 items-start'>
        <div className='ml-64 flex flex-col items-start gap-8 h-full justify-center'>
          <h1 className='text-white text-5xl leading-snug'>
            Engage & Reward Employees <br /> Leading Healthy Lifestyles
          </h1>
          <Link href='/plans'>
            <button className='py-4 px-6 bg-white text-slate-900 rounded-md hover:shadow-lg transition-all duration-300 font-medium'>Sign up now</button>
          </Link>
        </div>
        <div className='mt-16 z-10'>
          <Image src={KudosAppImage} width={240} height={480} />
        </div>
        <div className='mt-24 -ml-48'>
          <Image src={KudosApp2Image} width={200} height={400} />
        </div>
      </section>
    </div>
  );
};

export default Home;
