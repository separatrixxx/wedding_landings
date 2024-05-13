import styles from './MainBlock.module.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { useRouter } from 'next/router';
import { MinimalMainBlock } from '../MinimalMainBlock/MinimalMainBlock';
import { addDateToCalendar } from '../../../helpers/calendar.helper';
import { RomanceMainBlock } from '../RomanceMainBlock/RomanceMainBlock';


export const MainBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <div className={styles.mainBlock}>
            <Button type={data.theme} subtype='dark' text={setLocale(router.locale).add_to_calendar} isMain={true}
                onClick={() => addDateToCalendar(data, router)}/>
            {
                data.theme === 'minimal' ?
                    <MinimalMainBlock /> :
                data.theme === 'romance' ?
                    <RomanceMainBlock /> :
                <></>
            }
        </div>
    );
};