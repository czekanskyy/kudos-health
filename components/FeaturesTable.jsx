import { CheckCircleIcon } from '@heroicons/react/solid';

const FeaturesTable = ({ visibility }) => {
  return (
    <section className={`max-w-6xl ${visibility ? '' : 'hidden'}`}>
      <table className='w-full table-fixed text-center text-gray-500'>
        <thead>
          <tr>
            <th className='text-left bg-slate-900'>Features</th>
            <th className='bg-purple-500'>Free</th>
            <th className='bg-blue-500'>Standard</th>
            <th className='bg-green-500'>Plus</th>
            <th className='bg-slate-500'>Pro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-left text-slate-900'>Internal rewards</td>
            <td>1</td>
            <td>3</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td className='text-left text-slate-900'>Challenges</td>
            <td>2</td>
            <td>5</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td className='text-left text-slate-900'>Personal goals</td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-purple-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-blue-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-green-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-slate-500' />{' '}
              </div>
            </td>
          </tr>
          <tr>
            <td className='text-left text-slate-900'>QR Codes</td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-purple-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-blue-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-green-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-slate-500' />{' '}
              </div>
            </td>
          </tr>
          <tr>
            <td className='text-left text-slate-900'>Stats / Reports</td>
            <td></td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-blue-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-green-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-slate-500' />{' '}
              </div>
            </td>
          </tr>
          <tr>
            <td className='text-left text-slate-900'>Support</td>
            <td></td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-blue-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-green-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-slate-500' />{' '}
              </div>
            </td>
          </tr>
          <tr>
            <td className='text-left text-slate-900'>Branding</td>
            <td></td>
            <td></td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-green-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-slate-500' />{' '}
              </div>
            </td>
          </tr>
          <tr>
            <td className='text-left text-slate-900'>Single Sign-on</td>
            <td></td>
            <td></td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-green-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <CheckCircleIcon width={24} height={24} className='text-slate-500' />{' '}
              </div>
            </td>
          </tr>
          <tr>
            <td className='text-left text-slate-900'>
              Challenge Modes
              <br />
              (Team/Individual/Charity)
            </td>
            <td>1</td>
            <td>All</td>
            <td>All</td>
            <td>All</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default FeaturesTable;
