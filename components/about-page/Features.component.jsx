const Features = ({ children, title }) => {
  return (
    <div className='bg-white shadow-md flex flex-col gap-2 rounded-lg lg:w-72 xl:w-80 p-5 text-slate-900'>
      <h3 className='text-center text-xl font-medium'>{title}</h3>
      <p className='text-center text-sm font-light'>{children}</p>
    </div>
  );
};

export default Features;
