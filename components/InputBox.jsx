const InputBox = ({ onChangeHandler, display }) => {
  return (
    <section className='rounded-md shadow-lg bg-white w-11/12 md:w-[42rem] text-blue-500 flex flex-col items-center p-8 gap-4 mb-6'>
      <h2 className='text-base md:text-2xl font-semibold'>Choose your subscription package</h2>
      <hr className='w-1/4 mt-2 border-t-2 border-blue-500' />
      <p className='text-center text-xs md:text-sm text-blue-400'>How many Employee do you want to give access to programme</p>
      <input
        type='number'
        name='numEmployees'
        id='numEmployees'
        className='w-2/5 p-2 bg-transparent outline-none border border-blue-500 rounded-md text-center placeholder:text-blue-400 transition-all focus:w-72'
        placeholder='Enter here'
        onChange={onChangeHandler}
      />
      <span className={`bg-red-500 px-2 p-1 rounded-md text-xs -mt-2 text-white ${display}`}>Maximum value is 999 999</span>
      <a href='#features' className='text-xs mt-2'>
        See features avalible in plans
      </a>
    </section>
  );
};

export default InputBox;
