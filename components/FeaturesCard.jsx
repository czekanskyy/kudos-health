import { DoneRounded, HealthAndSafetyRounded, RedeemRounded, TaskRounded, UpgradeRounded } from '@mui/icons-material';
import { red } from '@mui/material/colors';

const displayIcon = (id, iconFront) => {
  switch (id) {
    case 1:
      return <DoneRounded width={32} height={32} sx={{ color: iconFront }} />;
  }
};

const FeaturesCard = ({ title, id, children, colors: { outline, iconBg, iconFront } }) => {
  return (
    <div className='w-64 p-4 text-center text-slate-700 bg-white rounded-md m-4 flex flex-col items-center gap-4 outline outline-transparent transition-all shadow hover:outline-red-300 hover:shadow-lg'>
      <div className='flex items-center justify-center w-12 h-12 rounded-full bg-red-300'>{displayIcon(id, iconFront)}</div>
      <div className='flex flex-col gap-3'>
        <h3 className='text-base font-semibold'>{title}</h3>
        <p className='text-sm font-medium'>{children}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
