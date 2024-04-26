import styles from './Footer.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { AppState } from '../../../features/store/store';
import { Htag } from '../Htag/Htag';


export const Footer = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <footer className={cn(styles.footer, {
            [styles.footerMinimal]: data.theme === 'minimal',
        })}>
            <Htag tag='xl'>
                {data.brideName + ' & ' + data.groomName}
            </Htag>
            <Htag tag='s' className={styles.byText}>
                created by Ori Wedding
            </Htag>
        </footer>
    );
};