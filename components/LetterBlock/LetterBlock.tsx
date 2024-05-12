import styles from './LetterBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../features/store/store';
import { Htag } from '../Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import Image from 'next/image';
import cn from 'classnames';


export const LetterBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <div className={cn(styles.letterBlock, {
            [styles.letterMinimal]: data.theme === 'minimal',
            [styles.letterRomance]: data.theme === 'romance',
            [styles.letterPhoto]: data.theme === 'photo',
        })}>
            <Htag tag='xl'>
                {setLocale(router.locale).letter_from_couple}
            </Htag>
            <Htag tag='m' className={styles.letter}>
                {data.letter}
            </Htag>
            {
                data.theme === 'romance' ?
                    <div className={styles.imageBlock}>
                        <Image className={styles.img} draggable='false'
                            loader={() => '/flowerImg4.webp'}
                            src='/flowerImg4.webp'
                            alt='flower4 img'
                            width={1}
                            height={1}
                            priority={true}
                            unoptimized={true}
                        />
                    </div>
                : <></>
            }
        </div>
    );
};