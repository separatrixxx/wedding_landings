import styles from './DressCodeBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../features/store/store';
import { setLocale } from '../../helpers/locale.helper';
import cn from 'classnames';
import { Htag } from '../Common/Htag/Htag';


export const DressCodeBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <div className={cn(styles.dressCodeBlock, {
            [styles.dressCodeMinimal]: data.theme === 'minimal',
        })}>
            <Htag tag='xl' className={styles.title}>
                {setLocale(router.locale).dress_code}
            </Htag>
            <Htag tag='m' className={styles.dressCodeText}>
                {data.dressCode.text}
            </Htag>
            <div className={styles.dressCodeColorsDiv}
                style={{ gridTemplateColumns: `repeat(${data.dressCode.colors.length}, auto)` }}>
                {
                    data.dressCode.colors.map(c => (
                        <div key={c} className={styles.dressCodeColor}
                            style={{ background: c }} />
                    ))
                }
            </div>
            <Htag tag='s' className={styles.dressDescr}>
                {data.dressCodeText}
            </Htag>
        </div>
    );
};