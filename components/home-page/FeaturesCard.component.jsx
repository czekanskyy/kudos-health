const FeaturesCard = ({
  text: { title, desc },
  colors: { outline, background, shadow, shadowHover },
  children,
}) => {
  return (
    <div
      className={`w-11/12 md:w-56 lg:w-64 p-4 text-center text-slate-700 bg-white rounded-md m-2 lg:m-4 flex flex-col items-center gap-4 outline outline-transparent transition-all shadow hover:shadow-lg ${outline}`}
    >
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full ${background}`}
      >
        {children}
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className='text-base font-semibold'>{title}</h3>
        <p className='text-sm md:text-xs lg:text-sm font-medium'>{desc}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
