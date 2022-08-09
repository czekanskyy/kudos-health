import Head from 'next/head';
import '../styles/globals.scss';
import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KudosHealth | Health Engagement Platform</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
