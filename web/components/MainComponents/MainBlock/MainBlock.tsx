import styles from './MainBlock.module.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { useRouter } from 'next/router';
import { MinimalMainBlock } from '../MinimalMainBlock/MinimalMainBlock';
import { addDateToCalendar } from '../../../helpers/calendar.helper';
import { RomanceMainBlock } from '../RomanceMainBlock/RomanceMainBlock';
import { Htag } from '../../Common/Htag/Htag';
import { formatDateRomance } from '../../../helpers/format.helper';
import Image from 'next/image';
import cn from 'classnames';


export const MainBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <div className={cn(styles.mainBlock, {
            [styles.photoMainBlock]: data.theme === 'photo',
        })}>
            <Button type={data.theme} subtype='dark' text={setLocale(router.locale).add_to_calendar} isMain={true}
                onClick={() => addDateToCalendar(data, router)}/>
            {
                data.theme === 'minimal' ?
                    <MinimalMainBlock /> :
                data.theme === 'romance' ?
                    <RomanceMainBlock /> :
                <>
                    <div className={styles.photoInfoDiv}>
                        <Htag tag='xxxl' className={styles.names}>
                            {data.brideName} <span className={styles.and}>&</span> {data.groomName}
                        </Htag>
                        <div className={styles.photoInfoDiv2}>
                            <div className={styles.dateTimeDiv}>
                                <Htag tag='l'>
                                    {formatDateRomance(data.date)}
                                </Htag>
                                <Htag tag='l'>
                                    {data.time}
                                </Htag>
                            </div>
                            <div>
                                <Htag tag='m'>
                                    {data.location}
                                </Htag>
                                <Htag tag='m'>
                                    {data.restourant}
                                </Htag>
                            </div>
                        </div>
                    </div>
                    {
                        data.photoMain ?
                            <div className={styles.imageBlock}>
                                <Image className={styles.img} draggable='false'
                                    loader={() => data.photoMain ? process.env.NEXT_PUBLIC_DOMAIN + data.photoMain : ''}
                                    src={data.photoMain ? process.env.NEXT_PUBLIC_DOMAIN + data.photoMain : ''}
                                    alt='photoMain img'
                                    width={1}
                                    height={1}
                                    priority={true}
                                    unoptimized={true}
                                />
                            </div>
                        : <></>
                    }
                    
                </>
            }
        </div>
    );
};