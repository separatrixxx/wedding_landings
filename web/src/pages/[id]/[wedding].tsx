import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import axios, { AxiosResponse } from 'axios';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLocale } from '../../../helpers/locale.helper';
import { WeddingPage } from '../../../page_components/WeddingPage/WeddingPage';
import { DataInterface, DataPlural, DataSingle, StylesConfigInterface } from '../../../interfaces/data.interface';
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
        dispatch(setData(wedding));

        if (wedding && wedding.stylesConfig) {
            setCSSVariables(wedding.stylesConfig);
        }
    }, [dispatch, wedding]);

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

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const paths: any[] = [];
    
    for (const locale of locales || []) {
        const { data: response }: AxiosResponse<DataPlural> = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/wedding-datas`);    

        response.data.forEach(wedding => {
            paths.push({
                params: { id: wedding.id.toString(), wedding: wedding.brideName.toLowerCase() + '_and_' + wedding.groomName.toLowerCase() },
                locale,
            });
        });
    }

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps<WeddingProps> = async ({ params }) => {
    if (!params || !params.id) {
        return {
            notFound: true
        };
    }
    try {
        const { data: wedding }: AxiosResponse<DataSingle> = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/wedding-datas/${params.id}`);

        if (!wedding.data || wedding.data.brideName.toLowerCase() + '_and_' + wedding.data.groomName.toLowerCase() !== params.wedding) {
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
