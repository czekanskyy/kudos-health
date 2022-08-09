import ContactHeroSection from '../../components/contact-page/ContactHero.section';
import FormSection from '../../components/contact-page/Form.section';
import InfoWrapperSection from '../../components/contact-page/InfoWrapper.section';

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
