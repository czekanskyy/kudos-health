import Head from 'next/head';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Kudos Health</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
