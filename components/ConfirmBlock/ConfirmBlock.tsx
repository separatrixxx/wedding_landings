import styles from './ConfirmBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../features/store/store';
import { setLocale } from '../../helpers/locale.helper';
import { Button } from '../Common/Button/Button';
import cn from 'classnames';
import { confirmPresence } from '../../helpers/confirm.helper';


export const ConfirmBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <div className={cn(styles.confirmBlock, {
            [styles.confirmMinimal]: data.theme === 'minimal',
        })}>
            <Button text={setLocale(router.locale).confirm_text} type={data.theme} subtype='light'
                onClick={() => confirmPresence(router)} />
        </div>
    );
};