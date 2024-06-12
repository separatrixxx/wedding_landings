import { TimerItemProps } from './TimerItem.props';
import styles from './TimerItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const TimerItem = ({ num, text, type }: TimerItemProps): JSX.Element => {
    return (
        <div className={cn(styles.timerItem, {
            [styles.minimalTimerItem]: type === 'minimal',
            [styles.romanceTimerItem]: type === 'romance',
            [styles.photoTimerItem]: type === 'photo',
        })}>
            <Htag tag='xxl'>
                {num}
            </Htag>
            <Htag tag='s' className={styles.text}>
                {text}
            </Htag>
        </div>
    );
};
