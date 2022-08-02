import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link href='https://fonts.googleapis.com/css2?family=Dongle&family=Gloria+Hallelujah&family=Poppins&display=swap' rel='stylesheet' />
        <link rel='shortcut icon' href='images/logo.webp' />
      </Head>
      <body className='bg-gray-50 text-slate-900 relative after:content-[""] after:block after:h-16 min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
