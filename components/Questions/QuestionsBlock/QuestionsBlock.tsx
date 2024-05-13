import styles from './QuestionsBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../../features/store/store';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import Image from 'next/image';
import { QuestionItem } from '../QuestionItem/QuestionItem';
import { useState } from 'react';
import { AnswerInterface } from '../../../interfaces/data.interface';
import { Button } from '../../Common/Button/Button';
import { sendAnswers } from '../../../helpers/questions.helper';
import { Modal } from '../../Common/Modal/Modal';
import cn from 'classnames';


export const QuestionsBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    const [answers, setAnswers] = useState<AnswerInterface[]>([]);

    const [active, setActive] = useState<boolean>(false);
    const [name, setName] = useState<string>('');

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            sendAnswers(data.questions, answers, name, router);
            setActive(false);
            setName('');
        }
    };

    return (
        <>
            <div className={cn(styles.questionsBlock, {
                [styles.questionsMinimal]: data.theme === 'minimal',
                [styles.questionsRomance]: data.theme === 'romance',
                [styles.questionsPhoto]: data.theme === 'photo',
            })}>
                <Htag tag='xl'>
                    {setLocale(router.locale).questions_for_you}
                </Htag>
                <div className={cn(styles.questionsList)}>
                    {
                        data.questions.map(q => (
                            <QuestionItem key={q.question} question={q} type={data.theme} setAnswers={setAnswers} />
                        ))
                    }
                </div>
                <Button text={setLocale(router.locale).send} type={data.theme} subtype='dark'
                    onClick={() => setActive(true)} />
                {
                    data.theme === 'minimal' ?
                        <div className={styles.imageBlock}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/flowerImg2.webp'}
                                src='/flowerImg2.webp'
                                alt='flower2 img'
                                width={1}
                                height={1}
                                priority={true}
                                unoptimized={true}
                            />
                        </div>
                    : data.theme === 'romance' ?
                        <div className={cn(styles.imageBlock, styles.imageBlockRomance)}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/flowerImg5.webp'}
                                src='/flowerImg5.webp'
                                alt='flower5 img'
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
