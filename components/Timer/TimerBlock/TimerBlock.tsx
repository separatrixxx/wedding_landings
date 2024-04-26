import styles from './TimerBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../../features/store/store';
import { TimerItem } from '../TimerItem/TimerItem';
import { setLocale } from '../../../helpers/locale.helper';



export const TimerBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    const nums = [25, 12, 34, 51, 10];
    const text = ['weeks', 'days', 'hours', 'minutes', 'seconds'];

    return (
        <div className={styles.timerBlock}>
            {
                nums.map((n, i) => (
                    <TimerItem key={n} type={data.theme} num={n} text={setLocale(router.locale)[text[i] as 'weeks']} />
                ))
            }
        </div>
    );
};