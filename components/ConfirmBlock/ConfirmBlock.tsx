import styles from './ConfirmBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../features/store/store';
import { setLocale } from '../../helpers/locale.helper';
import { Button } from '../Common/Button/Button';
import { confirmPresence } from '../../helpers/confirm.helper';
import { useState } from 'react';
import { Modal } from '../Common/Modal/Modal';
import Image from 'next/image';
import cn from 'classnames';


export const ConfirmBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    const [active, setActive] = useState<boolean>(false);
    const [name, setName] = useState<string>('');

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            confirmPresence(name, router);
            setActive(false);
            setName('');
        }
    };

    return (
        <>
            <div className={cn(styles.confirmBlock, {
                [styles.confirmMinimal]: data.theme === 'minimal',
                [styles.confirmRomance]: data.theme === 'romance',
                [styles.confirmPhoto]: data.theme === 'photo',
            })}>
                <Button text={setLocale(router.locale).confirm_text} type={data.theme} subtype='light'
                    onClick={() => setActive(true)} />
                {
                    data.theme === 'romance' ?
                        <div className={styles.imageBlock}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/romanceImg1.webp'}
                                src='/romanceImg1.webp'
                                alt='romance1 img'
                                width={1}
                                height={1}
                                priority={true}
                                unoptimized={true}
                            />
                        </div>
                    : <></>
                }
            </div>
            <Modal active={active} setActive={setActive}>
                <div className={styles.modalBody}>
                <input
                    placeholder={setLocale(router.locale).enter_your_name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={handleKeyPress}
                    aria-label='enter name' />
                </div>
            </Modal>
        </>
    );
};