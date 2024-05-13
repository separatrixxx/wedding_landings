import styles from './RomanceMainBlock.module.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';
import { setLocale } from '../../../helpers/locale.helper';
import { useRouter } from 'next/router';
import { Htag } from '../../Common/Htag/Htag';
import { formatDateRomance } from '../../../helpers/format.helper';
import Image from 'next/image';


export const RomanceMainBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <div className={styles.romanceMainBlock}>
            <div className={styles.infoDiv}>
                <Htag tag='m'>
                    {setLocale(router.locale).save_date}
                </Htag>
                <div className={styles.infoDiv2}>
                    <div>
                        <Htag tag='xxxl' className={styles.names}>
                            {data.brideName} <span className={styles.and}>&</span> {data.groomName}
                        </Htag>
                        <Htag tag='l' className={styles.date}>
                            {formatDateRomance(data.date)}
                        </Htag>
                    </div>
                    <div className={styles.timeDiv}>
                        <Htag tag='l' className={styles.time}>
                            {data.time}
                        </Htag>
                        <Htag tag='m' className={styles.location}>
                            {data.location}
                        </Htag>
                        <Htag tag='m' className={styles.location}>
                            {data.restourant}
                        </Htag>
                    </div>
                </div>
            </div>
            <div className={styles.imageBlock}>
				<Image className={styles.img} draggable='false'
					loader={() => '/romanceImgMain.webp'}
					src='/romanceImgMain.webp'
					alt='romanceMain img'
					width={1}
					height={1}
					priority={true}
					unoptimized={true}
				/>
			</div>
        </div>
    );
};
