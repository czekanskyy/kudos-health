import Image from 'next/image';

const Card = ({ image, title, children, imgRight }) => {
  imgRight ||= false;
  return (
    <div className='w-full h-[32rem] sm:h-80 md:h-72 lg:h-64 bg-white flex flex-col sm:flex-row rounded-xl overflow-hidden shadow transition-all hover:shadow-md max-w-4xl'>
      <div className={`sm:w-80 h-full relative overflow-hidden ${imgRight ? 'order-1 sm:order-2' : ''}`}>
        <Image src={image} layout='fill' objectFit='cover' objectPosition='center' />
      </div>
      <div className={`flex flex-col p-4 gap-6 w-full justify-center items-start ${imgRight ? 'order-2 sm:order-1' : ''}`}>
        <h3 className='text-4xl font-semibold'>{title}</h3>
        <p className='text-xl'>{children}</p>
        <button className='text-blue-500 transition-all hover:text-blue-600'>See more &gt;</button>
      </div>
    </div>
  );
};

export default Card;
