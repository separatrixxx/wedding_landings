import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";
import { getData } from "../../helpers/data.helper";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


function Main(): JSX.Element {
  const router = useRouter();
  
  const dispatch = useDispatch();

  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).wedding_landing}</title>
        <meta name='description' content={setLocale(router.locale).wedding_landing} />
        <meta property='og:title' content={setLocale(router.locale).wedding_landing} />
        <meta property='og:description' content={setLocale(router.locale).wedding_landing} />
        <meta charSet="utf-8" />
      </Head>
      <MainPage />
    </>
  );
}

export default Main;
