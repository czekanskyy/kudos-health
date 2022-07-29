const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white w-full text-center p-6 mt-12 z-50 relative bottom-0'>
      © <span className='font-semibold'>Dominik & Norbert {new Date().getFullYear()}</span> - page created for{' '}
      <span className='text-blue-500'>Kudos Health</span>
    </footer>
  );
};

export default Footer;
