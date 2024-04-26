import { TimerItemProps } from './TimerItem.props';
import styles from './TimerItem.module.css';
import cn from 'classnames';
import { Htag } from '../../Common/Htag/Htag';


export const TimerItem = ({ num, text, type }: TimerItemProps): JSX.Element => {
    return (
        <div className={cn(styles.timerItem, {
            [styles.minimalTimerItem]: type === 'minimal',
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
