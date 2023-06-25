import '../styles/globals.css';
import Header from 'components/layout/header';
import Footer from '../components/footer';

function MyApp({Component, pageProps}) {
    console.log(Component.getLayout, 'tt');
    if (Component.getLayout) {
        console.log("testing");
        return Component.getLayout(<Component {...pageProps} />);
    }

  return <><Header />
  <div className='middle-layout'><Component {...pageProps} /></div><Footer /></>;
}

export default MyApp;
