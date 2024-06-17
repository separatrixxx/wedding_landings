import styles from './FilmBlock.module.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../features/store/store';
import Image from 'next/image';


export const FilmBlock = (): JSX.Element => {
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <div className={styles.filmBlock}>
            <div>
                {
                    data.photos?.concat(data.photos).concat(data.photos).map((p, i) => (
                        <div key={p + i} className={styles.photoImageBlock}>
                            <Image className={styles.photoImg} draggable='false'
                                loader={() => process.env.NEXT_PUBLIC_DOMAIN + p}
                                src={process.env.NEXT_PUBLIC_DOMAIN + p}
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
    );
};