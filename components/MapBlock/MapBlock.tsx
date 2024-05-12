import styles from './MapBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../features/store/store';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Common/Htag/Htag';
import cn from 'classnames';
import { GetThereBlock } from '../GetThere/GetThereBlock/GetThereBlock';


export const MapBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <div className={cn(styles.mapBlock, {
            [styles.mapMinimal]: data.theme === 'minimal',
        })}>
            <Htag tag='xl'>
                {setLocale(router.locale).map_text}
            </Htag>
            <div className={styles.mapDiv}>
                <iframe src={data.locationMap} width="100%" height="100%" loading="lazy" />
            </div>
            <GetThereBlock />
        </div>
    );
};
