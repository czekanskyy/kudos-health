const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white w-full flex items-center justify-center mt-12 z-50 absolute h-16 bottom-0 gap-1 text-xs md:text-base'>
      © <span className='font-semibold'>Dominik & Norbert {new Date().getFullYear()}</span> - page created for{' '}
      <span className='text-blue-500'>KudosHealth</span>
    </footer>
  );
};

export default Footer;
