import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormSection = () => {
  const form = useRef();
  const [status, setStatus] = useState('Send message');
  const [border, setBorder] = useState('border-white');

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    setBorder('border-yellow-500');
    emailjs.sendForm('service_3cstgko', 'template_rxw5r9t', form.current, 'x2Rtb8ovmo7RVLPSw').then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      }
    );
    setTimeout(() => {
      setStatus('Message sent');
      setBorder('border-green-500');
    }, 2500);
    setTimeout(() => {
      e.target.reset();
      setStatus('Send message');
      setBorder('border-white');
    }, 5000);
  };

  return (
    <div className={`flex w-full justify-center p-8 shadow-md bg-white transition-all border-4 ${border}`}>
      <form ref={form} onSubmit={handleSubmit} id='contact-form' className='flex max-w-6xl w-full flex-col justify-center items-center gap-6'>
        <p className='text-3xl font-medium'>Message Us</p>
        <div className='flex flex-col md:flex-row w-full justify-center gap-6'>
          <input type='text' name='name' id='name' placeholder='Name' required />
          <input type='text' name='company' id='company' placeholder='Company' />
        </div>
        <div className='flex flex-col md:flex-row w-full justify-center gap-6'>
          <input type='email' name='email' id='email' placeholder='E-mail address' required />
          <input type='tel' name='phone' id='phone' placeholder='Phone number' />
        </div>
        <div className='flex flex-col md:flex-row w-full justify-center gap-6'>
          <input type='text' name='title' id='title' placeholder='Title' required />
          <input type='number' name='employees' id='employees' min={1} max={999999} placeholder='Number of Employees' />
        </div>
        <div className='flex w-full justify-center'>
          <textarea name='message' id='message' cols='30' rows='6' placeholder='Your message' required />
        </div>
        <div className='flex w-full justify-end'>
          <button
            type='submit'
            className={`px-4 py-2 text-white rounded-md text-lg transition-all ${
              status === 'Send message' ? 'bg-blue-500 hover:bg-blue-600' : status === 'Sending...' ? 'bg-yellow-500' : 'bg-green-500'
            }`}
          >
            {status}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
