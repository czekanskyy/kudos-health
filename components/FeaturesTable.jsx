import { FaCheckCircle } from 'react-icons/fa';

const FeaturesTable = ({ visibility }) => {
  return (
    <section className={`max-w-6xl ${visibility ? '' : 'hidden'}`}>
      <table className='w-full table-fixed text-center text-gray-500 text-xs sm:text-sm md:text-base'>
        <thead>
          <tr>
            <th className='text-left bg-slate-500'>Features</th>
            <th className='bg-starter-500'>Starter</th>
            <th className='bg-standard-500'>Standard</th>
            <th className='bg-pro-500'>Pro</th>
            <th className='bg-premium-500'>Premium</th>
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
                <FaCheckCircle className='text-2xl text-starter-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-standard-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-pro-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-premium-500' />{' '}
              </div>
            </td>
          </tr>
          <tr>
            <td className='text-left text-slate-900'>QR Codes</td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-starter-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-standard-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-pro-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-premium-500' />{' '}
              </div>
            </td>
          </tr>
          <tr>
            <td className='text-left text-slate-900'>Stats / Reports</td>
            <td></td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-standard-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-pro-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-premium-500' />{' '}
              </div>
            </td>
          </tr>
          <tr>
            <td className='text-left text-slate-900'>Support</td>
            <td></td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-standard-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-pro-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-premium-500' />{' '}
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
                <FaCheckCircle className='text-2xl text-pro-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-premium-500' />{' '}
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
                <FaCheckCircle className='text-2xl text-pro-500' />{' '}
              </div>
            </td>
            <td>
              <div className='flex justify-center'>
                {' '}
                <FaCheckCircle className='text-2xl text-premium-500' />{' '}
              </div>
            </td>
          </tr>
          <tr>
            <td className='text-left text-slate-900'>
              Challenge Modes
              <span className='hidden md:inline'>
                <br />
                (Team/Individual/Charity)
              </span>
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
