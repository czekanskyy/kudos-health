import Image from 'next/image';
import { Tooltip, Zoom } from '@mui/material';

const OfferCard = ({ image, title, children }) => {
  return (
    <Tooltip title='Click for more' placement='top' arrow TransitionComponent={Zoom}>
      <button className='max-w-md md:w-80 lg:h-80 bg-white text-slate-500 rounded-lg shadow transition-all hover:shadow-md overflow-hidden flex flex-col'>
        <div className='lg:h-48 relative overflow-hidden'>
          <Image src={image} />
        </div>
        <div className='md:h-32 p-4 md:p-2 lg:p-3 w-full text-center flex flex-col justify-start gap-2'>
          <h3 className='lg:text-lg'>{title}</h3>
          <p className='text-xs lg:text-sm'>{children}</p>
        </div>
      </button>
    </Tooltip>
  );
};

export default OfferCard;
