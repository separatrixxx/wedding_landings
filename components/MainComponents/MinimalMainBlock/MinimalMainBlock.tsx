import styles from './MinimalMainBlock.module.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';
import { setLocale } from '../../../helpers/locale.helper';
import { useRouter } from 'next/router';
import { Htag } from '../../Common/Htag/Htag';
import { formatDate } from '../../../helpers/format.helper';
import Image from 'next/image';


export const MinimalMainBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <div className={styles.minimalMainBlock}>
            <div className={styles.dataBlock}>
                <Htag tag='l'>
                    {setLocale(router.locale).join_us}
                </Htag>
                <Htag tag='xxl' className={styles.date}>
                    {formatDate(data.date)}
                </Htag>
                <Htag tag='l'>
                    {setLocale(router.locale).as_we_say}
                </Htag>
            </div>
            <div className={styles.namesBlock}>
                <Htag tag='m'>
                    {setLocale(router.locale).save_date}
                </Htag>
                <Htag tag='xl' className={styles.names}>
                    {data.brideName} <span className={styles.and}>&</span> {data.groomName}
                </Htag>
                <Htag tag='s' className={styles.time}>
                    {data.time}
                </Htag>
                <Htag tag='m'>
                    {data.location}
                </Htag>
                <Htag tag='m'>
                    {data.restourant}
                </Htag>
            </div>
            <div className={styles.imageBlock}>
				<Image className={styles.img} draggable='false'
					loader={() => '/flowerImg1.webp'}
					src='/flowerImg1.webp'
					alt='flower1 img'
					width={1}
					height={1}
					priority={true}
					unoptimized={true}
				/>
			</div>
        </div>
    );
};