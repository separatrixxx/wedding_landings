import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";
import { ErrorPage } from "../../page_components/ErrorPage/ErrorPage";
import { useEffect } from 'react';


function Main(): JSX.Element {
  const router = useRouter();
  
  useEffect(() => {    
    router.push('https://ori.wedding');
}, [router]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).wedding_landing}</title>
        <meta name='description' content={setLocale(router.locale).wedding_landing} />
        <meta property='og:title' content={setLocale(router.locale).wedding_landing} />
        <meta property='og:description' content={setLocale(router.locale).wedding_landing} />
        <meta charSet="utf-8" />
      </Head>
    </>
  );
}

export default Main;
