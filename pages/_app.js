import '../styles/globals.css';
import '../styles/styles.scss';
import 'react-image-lightbox/style.css';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import {useEffect} from 'react';
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
    useEffect(() => {
        document.getElementById("__next").className = "VaroBoy";
      }, []);
    return <Component {...pageProps} />
    
}
export default MyApp;