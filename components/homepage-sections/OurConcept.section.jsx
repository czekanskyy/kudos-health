// Images
import HandsImage from '/public/images/hands.webp';
import FitImage from '/public/images/fit.webp';
import IdeaImage from '/public/images/bulb.webp';
// Imports
import OurConceptCard from './OurConceptCard.component';

const OurConceptSection = () => {
  return (
    <section id='our-concept' className='mt-64 p-4 text-slate-500 flex flex-col gap-16'>
      <h2 className='text-3xl flex flex-col gap-8 items-center'>
        <span>
          Our concept is <span className='font-gloria'>simple</span>,
        </span>
        <span>affordable gamification of workplace health initiatives</span>
      </h2>
      <OurConceptCard title='Inclusivity' image={HandsImage}>
        Engage and reward all your employees of all fitness levels & activities across the globe, without disrupting their existing activity choices
      </OurConceptCard>
      <OurConceptCard title='Innovation' image={IdeaImage} imgRight={true}>
        Create fun, competitive challenges driven by an individual&apos;s ability, calorie burn and activity intensity, and not just &apos;Steps&apos; which
        favours the fittest employees
      </OurConceptCard>
      <OurConceptCard title='Integration' image={FitImage}>
        Connect to the employees existing popular fitness tracking app&apos;s and devices for automated data collection and simple participation
      </OurConceptCard>
    </section>
  );
};

export default OurConceptSection;
