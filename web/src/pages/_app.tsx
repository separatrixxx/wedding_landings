import '../styles/globals.css';
// import '../styles/config.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { setLocale } from '../../helpers/locale.helper';
import { wrapper } from '../../features/store/store';
import { Provider } from 'react-redux';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { store } = wrapper.useWrappedStore(pageProps);
  
  return (
    <Provider store={store}>
      <Head>
        <title>{setLocale(router.locale).wedding_landing}</title>
        <meta name='description' content={setLocale(router.locale).wedding_landing} />
        <meta property='og:title' content={setLocale(router.locale).wedding_landing} />
        <meta property='og:description' content={setLocale(router.locale).wedding_landing} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="icon" href="/favicon-48x48.ico" sizes="48x48" type="image/x-icon" />
        <link rel="icon" href="/favicon-144x144.ico" sizes="144x144" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon-167x167.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
