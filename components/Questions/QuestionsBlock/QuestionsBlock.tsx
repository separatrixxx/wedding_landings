import styles from './QuestionsBlock.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '../../../features/store/store';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import Image from 'next/image';
import { QuestionItem } from '../QuestionItem/QuestionItem';
import { useState } from 'react';
import cn from 'classnames';
import { AnswerInterface } from '../../../interfaces/data.interface';
import { Button } from '../../Common/Button/Button';



export const QuestionsBlock = (): JSX.Element => {
    const router = useRouter();
    const data = useSelector((state: AppState) => state.data.data);

    const [answers, setAnswers] = useState<AnswerInterface[]>([]);

    return (
        <div className={cn(styles.questionsBlock, {
            [styles.questionsMinimal]: data.theme === 'minimal',
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
            <Button text={setLocale(router.locale).send} type={data.theme} subtype='dark' onClick={() => {}} />
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
        </div>
    );
};