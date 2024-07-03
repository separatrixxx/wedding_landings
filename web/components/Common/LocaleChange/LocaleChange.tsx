import { LocaleChangeProps } from './LocaleChange.props';
import styles from './LocaleChange.module.css';
import { Htag } from '../Htag/Htag';
import { useRouter } from 'next/router';
import cn from 'classnames';


export const LocaleChange = ({ type }: LocaleChangeProps): JSX.Element => {
    const router = useRouter();
    const { id, link } = router.query;

    const handleLocaleChange = () => {
        const newLocale = router.locale === 'en' ? 'ru' : 'en';
        const href = `/${id}/${link}`;
        router.push(href, href, { locale: newLocale });
    };

    return (
        <button className={cn(styles.localeChange, {
            [styles.localeChangeMinimal]: type === 'minimal',
            [styles.localeChangeRomance]: type === 'romance',
            [styles.localeChangePhoto]: type === 'photo',
        })} onClick={handleLocaleChange}>
            {router.locale}
        </button>
    );
};

