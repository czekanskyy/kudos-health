import Link from 'next/link';
import Image from 'next/image';
// import heroImage from '../public/images/man-happy.webp';

const Home = () => {
  return (
    <div className='min-h-screen'>
      {/* <Image src={heroImage} alt='Homepage main image, happy man' layout='fill' className=' blur-sm -z-10' /> */}
      <section className='w-full h-screen opacity-95 flex flex-col items-center justify-center'>
        <h1 className='text-2xl'>KudosHealth</h1>
        <Link href='/plans'>
          <button className='text-lg text-black cursor-pointer'>Click here to sign up!</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
