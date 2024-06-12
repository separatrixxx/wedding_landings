import styles from './MessageBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../features/store/store';
import { setLocale } from '../../helpers/locale.helper';
import { Button } from '../Common/Button/Button';
import { Htag } from '../Common/Htag/Htag';
import { useState } from 'react';
import { sendMessage } from '../../helpers/message.helper';
import Image from 'next/image';
import cn from 'classnames';


export const MessageBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    const [message, setMessage] = useState<string>('');

    return (
        <div className={cn(styles.messageBlock, {
            [styles.messageMinimal]: data.theme === 'minimal',
            [styles.messageRomance]: data.theme === 'romance',
            [styles.messagePhoto]: data.theme === 'photo',
        })}>
            <Htag tag='xl'>
                {setLocale(router.locale).message_text}
            </Htag>
            <textarea className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name='message'
                aria-label='message' />
            <Button text={setLocale(router.locale).send} type={data.theme} subtype='light'
                onClick={() => sendMessage(message, setMessage, router)} />
            {
                data.theme === 'romance' ?
                    <div className={styles.imageBlock}>
                        <Image className={styles.img} draggable='false'
                            loader={() => '/romanceImg3.webp'}
                            src='/romanceImg3.webp'
                            alt='romance3 img'
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
