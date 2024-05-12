import styles from './TimerBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../../features/store/store';
import { TimerItem } from '../TimerItem/TimerItem';
import { setLocale } from '../../../helpers/locale.helper';
import { useEffect, useMemo, useState } from 'react';



export const TimerBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    const dateString = data.date + "T" + data.time;
    const dateParts = dateString.split('T')[0].split('-');
    const timeParts = dateString.split('T')[1].split(':');
    const targetDate = useMemo(() => {
        return new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]), parseInt(timeParts[0]), parseInt(timeParts[1]));
    }, [dateParts, timeParts]);

    const [timeLeft, setTimeLeft] = useState([0, 0, 0, 0, 0]);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
                const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft([weeks, days, hours, minutes, seconds]);
            } else {
                clearInterval(timer);
                setTimeLeft([0, 0, 0, 0, 0]);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate, timeLeft]);
    
    const text = ['weeks', 'days', 'hours', 'minutes', 'seconds'];

    return (
        <div className={styles.timerBlock}>
            {
                timeLeft.map((n, i) => (
                    <TimerItem key={n + setLocale(router.locale)[text[i] as 'weeks']} type={data.theme} num={n} text={setLocale(router.locale)[text[i] as 'weeks']} />
                ))
            }
        </div>
    );
};