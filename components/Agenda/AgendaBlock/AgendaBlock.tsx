import styles from './AgendaBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../../features/store/store';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import Image from 'next/image';
import { AgendaItem } from '../AgendaItem/AgendaItem';
import cn from 'classnames';


export const AgendaBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <div className={cn(styles.agendaBlock, {
            [styles.agendaMinimal]: data.theme === 'minimal',
            [styles.agendaRomance]: data.theme === 'romance',
            [styles.agendaPhoto]: data.theme === 'photo',
        })}>
            {
                data.theme === 'photo' ?
                    <div className={styles.filmBlock}>
                        <div>
                        {
                            data.photos?.concat(data.photos).map(p => (
                                <div key={p} className={styles.photoImageBlock}>
                                    <Image className={styles.photoImg} draggable='false'
                                        loader={() => p}
                                        src={p}
                                        alt='photo img'
                                        width={1}
                                        height={1}
                                        priority={true}
                                        unoptimized={true}
                                    />
                                </div>
                            ))
                        }
                        </div>
                    </div>
                : <></>
            }
            {
                data.theme === 'photo' ?
                    <div className={styles.photoDiv}>
                        <Htag tag='xl'>
                            {setLocale(router.locale).wedding_agenda}
                        </Htag>
                        <div className={styles.agendaList}>
                            {
                                data.agenda.map((a, i) => (
                                    <AgendaItem key={a.title} agenda={a} type={data.theme} isRight={data.theme === 'romance' && i % 2 !== 0 ? true : false} />
                                ))
                            }
                        </div>
                    </div>
                : <>
                   <Htag tag='xl'>
                        {setLocale(router.locale).wedding_agenda}
                    </Htag>
                    <div className={styles.agendaList}>
                        {
                            data.agenda.map((a, i) => (
                                <AgendaItem key={a.title} agenda={a} type={data.theme} isRight={data.theme === 'romance' && i % 2 !== 0 ? true : false} />
                            ))
                        }
                    </div>
                </>
            }
            {
                data.theme === 'minimal' ?
                    <div className={styles.imageBlock}>
                        <Image className={styles.img} draggable='false'
                            loader={() => '/flowerImg3.webp'}
                            src='/flowerImg3.webp'
                            alt='flower3 img'
                            width={1}
                            height={1}
                            priority={true}
                            unoptimized={true}
                        />
                    </div>
                : data.theme === 'romance' ?
                    <>
                        <div className={cn(styles.imageBlock, styles.cloverImg)}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/cloverImg.webp'}
                                src='/cloverImg.webp'
                                alt='clover img'
                                width={1}
                                height={1}
                                priority={true}
                                unoptimized={true}
                            />
                        </div>
                        <div className={cn(styles.imageBlock, styles.shamrockImg)}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/shamrockImg.webp'}
                                src='/shamrockImg.webp'
                                alt='shamrock img'
                                width={1}
                                height={1}
                                priority={true}
                                unoptimized={true}
                            />
                        </div>
                        <div className={cn(styles.imageBlock, styles.ladybugImg)}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/ladybugImg.webp'}
                                src='/ladybugImg.webp'
                                alt='ladybug img'
                                width={1}
                                height={1}
                                priority={true}
                                unoptimized={true}
                            />
                        </div>
                        <div className={cn(styles.imageBlock, styles.bumblebeeImg)}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/bumblebeeImg.webp'}
                                src='/bumblebeeImg.webp'
                                alt='bumblebee img'
                                width={1}
                                height={1}
                                priority={true}
                                unoptimized={true}
                            />
                        </div>
                    </>
                : <></>
            }
        </div>
    );
};