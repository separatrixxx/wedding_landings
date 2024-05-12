import { GetThereItemProps } from './GetThereItem.props';
import styles from './GetThereItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { motion } from 'framer-motion';
import { useState } from 'react';
import cn from 'classnames';


export const GetThereItem = ({ hoToGet }: GetThereItemProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const variants = {
        visible: {
            transform: 'rotate(90deg)',
        },
        hidden: {
            transform: 'rotate(0deg)',
        }
    };

    return (
        <div className={styles.getThereItem}>
            <motion.span className={styles.arrow}
                variants={variants}
                initial={isOpen ? 'visible' : 'hidden'}
                transition={{ duration: 0.3 }}
                animate={isOpen ? 'visible' : 'hidden'} />
            <div className={styles.getThereDiv}>
                <Htag tag='s' className={styles.title} onClick={() => setIsOpen(isOpen ? false : true)}>
                    {hoToGet.title}
                </Htag>
                <Htag tag='s' className={cn(styles.text, {
                    [styles.hidden]: !isOpen,
                })}>
                    {hoToGet.text}
                </Htag>
            </div>
        </div>
    );
};
