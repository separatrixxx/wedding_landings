import styles from './MapBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../features/store/store';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Common/Htag/Htag';
import { GetThereBlock } from '../GetThere/GetThereBlock/GetThereBlock';
import Image from 'next/image';
import cn from 'classnames';


export const MapBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <div className={cn(styles.mapBlock, {
            [styles.mapMinimal]: data.theme === 'minimal',
            [styles.mapRomance]: data.theme === 'romance',
            [styles.mapPhoto]: data.theme === 'photo',
        })}>
            <Htag tag='xl'>
                {setLocale(router.locale).map_text}
                {
                    data.theme === 'romance' ?
                        <>
                            <div className={cn(styles.imageBlock, styles.imageBlock1)}>
                                <Image className={styles.img} draggable='false'
                                    loader={() => '/butterflyImg1.webp'}
                                    src='/butterflyImg1.webp'
                                    alt='butterfly1 img'
                                    width={1}
                                    height={1}
                                    priority={true}
                                    unoptimized={true}
                                />
                            </div>
                            <div className={cn(styles.imageBlock, styles.imageBlock2)}>
                                <Image className={styles.img} draggable='false'
                                    loader={() => '/butterflyImg2.webp'}
                                    src='/butterflyImg2.webp'
                                    alt='butterfly2 img'
                                    width={1}
                                    height={1}
                                    priority={true}
                                    unoptimized={true}
                                />
                            </div>
                        </>
                    : <></>
                }
            </Htag>
            <div className={styles.mapDiv}>
                <iframe src={data.locationMap} width="100%" height="100%" loading="lazy" />
            </div>
            {
                data.blocks.howToGet ?
                    <GetThereBlock />
                : <></>
            }
        </div>
    );
};
