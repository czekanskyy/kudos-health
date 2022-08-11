import Image from 'next/image';
import Features from '../../components/about-page/Features.component';
import KudosCoin from '../../public/images/kudoscoin.webp';

// TODO move content into components and section as it is in the other pages

const AboutPage = () => {
  return (
    <div className='flex flex-col items-center mt-16'>
      <div id='kudoshealth' className='flex flex-col w-full items-center font-normal gap-6 pt-16 px-4'>
        <h2 className='text-4xl max-w-2xl w-full text-slate-900 text-center'>
          Reasons why Employer&apos;s implement employee <span className='font-bold text-blue-500'>health</span> initiatives
        </h2>
        <div className='flex flex-col md:flex-row gap-6 px-8 md:px-0'>
          <Features title='Create a health conscious culture in the workplace'>
            Companies who integrate Employee health & wellbeing into part of their company&apos;s culture and value will see many benefits across the
            organisation, but to be done correctly it needs to be supporting it long-term, otherwise it can be seen by employees as more about corporate PR than
            actually being about the health of Employees.{' '}
          </Features>
          <Features title='Healthy happy employees is one of the greatest assets your company can process'>
            The biggest asset a company processes is its people, and to achieve the best performance for those assets, they need to provide them with the best
            possible working environment, and insure they are fit for propose, and first and foremost this means the Employees health should be the number one
            goal of any organisation.
          </Features>{' '}
          <Features title='Reduce absences, long-term illness and increase productivity'>
            Poor health is the number one reason for absences from work, and there is an unending list of chronic illness that are linked to poor health,
            unhealthy eating & inactivity. Absences can be reduced, and costs associated with them, replacements staff, overtime and the dip in productivity
            experienced in periods of high absence.
          </Features>
        </div>
        <div className='flex flex-col md:flex-row gap-6 px-8 md:px-0'>
          <Features title='Enhance your existing CSR activities in the community'>
            The company&apos;s commitment to an Employee health programme, will always have a positive impact on Employee Satisfaction score, and again the more
            long-term the focus on health the greater the impact on the score can be, Employee&apos;s experiencing small number of health initiatives that
            interest them throughout the year can, sometimes view an organisation health promotions activities as just another “box ticking” exercise.
          </Features>
          <Features title='Improve your Employee satisfaction'>
            Being a good corporate citizen is high on the priority list for most organisations today, and raising funds for local charities has always a great
            tool to enhance this, but sometimes the Employee health events used to generate funds are generally over the duration of a single day, and the
            actual Employee health aspect is just secondary to the rising of the funds, and the CSR PR that creates, we want to increase the duration of health
            charity events to more than just one day.
          </Features>
        </div>
      </div>
      <hr className='w-4/5 mt-24' />
      <div id='kudoscoins' className='flex flex-col w-full items-center font-normal py-16'>
        <h2 className='text-4xl w-1/2 text-slate-900 text-center my-9'>KudosCoins, what can Employees do with them….</h2>
        <div className='flex flex-col px-6 md:flex-row max-w-4xl gap-4 w-full items-center '>
          <div className='w-full p-4 flex items-center flex-col justify-center'>
            <Image src={KudosCoin} alt='KudosCoin' layout='fixed' width={360} height={360} quality='100' />
            <h3 className='text-sm'>KudosCoin</h3>
          </div>
          <div className='w-full flex flex-col gap-2'>
            <p>
              Companies today reward Employees for performance, achievements, attendance & tenure, but health not so much! We&apos;ve created “KudosCoins” a
              digital currency used to motivate Employees into making health choices, Employees can earn KudosCoins in two ways, automatically by connecting
              their existing health apps & devices to our platform, and by using these app&apos;s, and by reaching their personal goals within those apps.
            </p>
            <p>
              Employer&apos;s, Managers & HR are also able to award “KudosCoins” directly to an Employee as they see fit, for the Employees that are making
              healthy choices both inside & outside work, award coins for attending the health talk or mindfulness seminar, for participating in the company
              healthy eating week, for completing the charity fun run or mini marathon, or for taking part in the lunchtime walk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
