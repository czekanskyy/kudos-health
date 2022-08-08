const FormSection = () => {
  return (
    <div className='flex w-full justify-center p-8 shadow-md bg-white'>
      <form action='none' id='contact-form' className='flex max-w-6xl w-full flex-col justify-center items-center gap-6'>
        <p className='text-3xl font-medium'>Message Us</p>
        <div className='flex w-full justify-center gap-6'>
          <input type='text' name='name' id='name' placeholder='Name' required />
          <input type='text' name='company' id='company' placeholder='Company' />
        </div>
        <div className='flex w-full justify-center gap-6'>
          <input type='email' name='email' id='email' placeholder='E-mail address' required />
          <input type='tel' name='phone' id='phone' placeholder='Phone number' />
        </div>
        <div className='flex w-full justify-center gap-6'>
          <input type='text' name='title' id='title' placeholder='Title' required />
          <input type='number' name='employees' id='employees' min={1} max={999999} placeholder='Number of Employees' />
        </div>
        <div className='flex w-full justify-center'>
          <textarea name='message' id='message' cols='30' rows='6' placeholder='Your message' required />
        </div>
        <div className='flex w-full justify-end'>
          <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-md text-lg'>
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
