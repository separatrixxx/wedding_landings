import styles from './LetterBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../features/store/store';
import { Htag } from '../Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import cn from 'classnames';


export const LetterBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <div className={cn(styles.letterBlock, {
            [styles.letterMinimal]: data.theme === 'minimal',
        })}>
            <Htag tag='xl'>
                {setLocale(router.locale).letter_from_couple}
            </Htag>
            <Htag tag='m' className={styles.letter}>
                {data.letter}
            </Htag>
        </div>
    );
};