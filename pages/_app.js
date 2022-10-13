import '../public/assets/css/animate.min.css';
import React, { useEffect, useState } from 'react';
import '../public/assets/css/tailwind-built.css';
import '../public/assets/css/global.css';
import Preloader from '../components/elements/Preloader';
import 'swiper/css';
import { wrapper } from 'store';
import { Provider } from 'react-redux';
function MyApp({ Component, pageProps, ...rest }) {
    const { store } = wrapper.useWrappedStore(rest);
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // }, []);
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
//
export default wrapper.withRedux(MyApp);
