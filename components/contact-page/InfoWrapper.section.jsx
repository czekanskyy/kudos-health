import InfoCard from './InfoCard.component';
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

const InfoWrapperSection = () => {
  return (
    <section className='flex flex-col items-center gap-8 mt-12 max-w-6xl w-full'>
      <h3 className='text-5xl font-medium'>Reach Us</h3>
      <div className='flex justify-center w-full gap-4'>
        <InfoCard icon={<FaMapMarkerAlt className='text-4xl text-blue-500' />}>
          Business Innovation Centre <br /> Institute of Technology <br /> Sligo, Ireland
        </InfoCard>
        <InfoCard icon={<FaMobileAlt className='text-4xl text-blue-500' />}>+353 71 9300 509</InfoCard>
        <InfoCard icon={<FaEnvelope className='text-4xl text-blue-500' />}>info@kudoshealth.com</InfoCard>
      </div>
    </section>
  );
};

export default InfoWrapperSection;
