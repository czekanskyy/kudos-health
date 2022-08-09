const InfoCard = ({ title, children, icon }) => {
  return (
    <div className='w-4/5 md:w-72 flex flex-col gap-6 items-center py-6 px-2 bg-white rounded-md shadow-md transition-all hover:shadow-lg'>
      <p>{icon}</p>
      <p className='text-center'>{children}</p>
    </div>
  );
};

export default InfoCard;
