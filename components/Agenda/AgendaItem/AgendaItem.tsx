import { AgendaItemProps } from './AgendaItem.props';
import styles from './AgendaItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';



export const AgendaItem = ({ agenda, type, isRight }: AgendaItemProps): JSX.Element => {
    return (
        <div className={cn(styles.agendaItem, {
            [styles.minimalAgendaItem]: type === 'minimal',
            [styles.romanceAgendaItem]: type === 'romance',
            [styles.photoAgendaItem]: type === 'photo',
            [styles.itemRight]: isRight,
        })}>
            <Htag tag='xxl'>
                {agenda.time}
            </Htag>
            <div className={styles.agendaTextDIv}>
                <Htag tag='m' className={styles.title}>
                    {agenda.title}
                </Htag>
                <Htag tag='s' className={styles.description}>
                    {agenda.description}
                </Htag>
            </div>
        </div>
    );
};
