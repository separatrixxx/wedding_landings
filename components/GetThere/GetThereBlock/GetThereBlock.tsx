import styles from './GetThereBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../../features/store/store';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';
import { GetThereItem } from '../GetThereItem/GetThereItem';


export const GetThereBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <div className={cn(styles.getThereBlock, {
            [styles.getThereMinimal]: data.theme === 'minimal',
        })}>
            <Htag tag='m'>
                {setLocale(router.locale).get_there_text + ':'}
            </Htag>
            <div className={styles.howToGetList}>
                {
                    data.howToGet.map(h => (
                        <GetThereItem key={h.title} hoToGet={h} />
                    ))
                }
            </div>
        </div>
    );
};
