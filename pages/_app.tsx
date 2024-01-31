import Nav from '../components/Nav/Nav';
import '../styles/css/global.css';
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return(
    <div>
        <Nav />
        <Component {...pageProps} />
    </div>
  )
};

export default MyApp;