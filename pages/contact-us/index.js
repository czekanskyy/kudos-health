import ContactHeroSection from '../../components/contactpage-sections/ContactHero.section';
import FormSection from '../../components/contactpage-sections/Form.section';
import InfoWrapperSection from '../../components/contactpage-sections/InfoWrapper.section';

const ContactUsPage = () => {
  return (
    <div className='mt-16 flex flex-col items-center'>
      <ContactHeroSection />
      <FormSection />
      <InfoWrapperSection />
    </div>
  );
};

export default ContactUsPage;
