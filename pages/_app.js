import './styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="votre-classe-de-mise-en-page">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
