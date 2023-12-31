import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <title>Crypto Guys</title>
          <meta name="description" content="Welcome to Crypto Guys app !" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }

export default MyApp;
