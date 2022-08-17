import FeaturesCard from './FeaturesCard.component';
import {
  FaTrophy,
  FaMedal,
  FaGift,
  FaList,
  FaLevelUpAlt,
} from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className='max-w-4xl w-full mt-8 px-4 gap-8 cursor-default'>
      <h2 className='text-3xl flex flex-col gap-8 items-center mb-8'>
        KudosHealth Features
      </h2>
      <div className='flex flex-col items-center md:items-stretch md:flex-row justify-center'>
        <FeaturesCard
          text={{
            title: `Challenges`,
            desc: `Create your very own custom "step like" challenges & competitions which engages employees' of all levels of fitness, so runner's, walker's, cyclist and everything in between can compete together in one initiative.`,
          }}
          colors={{
            outline: `hover:outline-green-300`,
            background: `bg-green-300`,
          }}
        >
          <FaTrophy className='text-green-500 text-xl' />
        </FeaturesCard>
        <FeaturesCard
          text={{
            title: `Employee Health Rewards`,
            desc: `Populate your own custom health rewards catalogue, where you can recognise and reward employees for being active, and also reward any other off-line health task with KudosCoins.`,
          }}
          colors={{
            outline: `hover:outline-pink-300`,
            background: `bg-pink-300`,
          }}
        >
          <FaMedal className='text-pink-500 text-xl' />
        </FeaturesCard>
        <FeaturesCard
          text={{
            title: `Charity Rewards`,
            desc: `Create Charity fundraising campaigns, driven by the employees' levels of physical activity and make donations to your chosen charities, where employees can contribute their KudosCoins to a community based Charity reward.`,
          }}
          colors={{
            outline: `hover:outline-red-300`,
            background: `bg-red-300`,
          }}
        >
          <FaGift className='text-red-500 text-xl' />
        </FeaturesCard>
      </div>
      <div className='flex flex-col items-center md:items-stretch md:flex-row justify-center'>
        <FeaturesCard
          text={{
            title: `Goal Setting`,
            desc: `Employee's have the ability to set their own personal goals based on "KudosPoints" they are achieving on a daily or weekly basis, they can chose to set their targets at their own levels, the greater the goal they set, the greater the number of "KudosCoins" they receive for achieving that goal.`,
          }}
          colors={{
            outline: `hover:outline-purple-300`,
            background: `bg-purple-300`,
          }}
        >
          <FaList className='text-purple-500 text-xl' />
        </FeaturesCard>
        <FeaturesCard
          text={{
            title: `Gamification & Level up's`,
            desc: `Each Employee as they register get placed on a "Level" from 1-100 and as they progress through the levels based on their health engagement efforts they are rewarded with bonus "KudosCoins" for progressing to the next level.`,
          }}
          colors={{
            outline: `hover:outline-blue-300`,
            background: `bg-blue-300`,
          }}
        >
          <FaLevelUpAlt className='text-blue-500 text-xl' />
        </FeaturesCard>
      </div>
    </section>
  );
};

export default FeaturesSection;
