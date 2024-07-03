import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import axios, { AxiosResponse } from 'axios';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLocale } from '../../../helpers/locale.helper';
import { WeddingPage } from '../../../page_components/WeddingPage/WeddingPage';
import { DataInterface, DataSingle, StylesConfigInterface } from '../../../interfaces/data.interface';
import { setData } from '../../../features/data/dataSlice';


const setCSSVariables = (config: StylesConfigInterface) => {
    if (typeof window !== 'undefined' && config) {
        const { colors, fonts } = config;
        Object.keys(colors).forEach((key: string) => {
            if (colors[key]) {
                document.documentElement.style.setProperty(`--${key}`, colors[key]!);
            }
        });
        Object.keys(fonts).forEach((key: string) => {
            if (fonts[key]) {
                document.documentElement.style.setProperty(`--${key}`, fonts[key]!);
            }
        });
    }
};

export default function Wedding({ wedding }: WeddingProps) {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if (router.locale === wedding.locale) {
            dispatch(setData(wedding));
        } else {
            dispatch(setData(wedding.localizations));
        }

        if (wedding && wedding.stylesConfig) {
            setCSSVariables(wedding.stylesConfig);
        }
    }, [dispatch, wedding, router.locale]);

    if (wedding) {
        return (
            <>
                <Head>
                    <title>{wedding.brideName + ' & ' + wedding.groomName}</title>
                    <meta name='description' content={setLocale(router.locale).wedding_landing} />
                    <meta property='og:title' content={wedding.brideName + ' & ' + wedding.groomName} />
                    <meta property='og:description' content={setLocale(router.locale).wedding_landing} />
                    <meta charSet="utf-8" />
                </Head>
                <WeddingPage />
            </>
        );
    } else {
        return <></>
    }
}

export const getServerSideProps: GetServerSideProps<WeddingProps> = async ({ params }) => {
    if (!params || !params.id || !params.link) {
        return {
            notFound: true
        };
    }
    try {
        const { data: wedding }: AxiosResponse<DataSingle> = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/wedding-datas/${params.id}`);

        if (!wedding.data || wedding.data.link !== params.link || wedding.data.locale === 'ru') {
            return {
                notFound: true
            };
        }

        return {
            props: {
                wedding: wedding.data
            }
        };
    } catch {
        return {
            notFound: true
        };
    }
};

interface WeddingProps extends Record<string, unknown> {
    wedding: DataInterface;
}
