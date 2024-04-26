import { QuestionItemProps } from './QuestionItem.props';
import styles from './QuestionItem.module.css';
import cn from 'classnames';
import { Htag } from '../../Common/Htag/Htag';


export const QuestionItem = ({ question, type, setAnswers }: QuestionItemProps): JSX.Element => {
    return (
        <div className={cn(styles.questionItem, {
            [styles.minimalQuestionrItem]: type === 'minimal',
        })}>
            <Htag tag='m' className={cn(styles.questionText)}>
                {question.question}
            </Htag>
            <form className={styles.answerBlock}>
                {question.answers.map(a => (
                    typeof a === 'string' ?
                        <>
                            <input id={a} type="radio" name={a} />
                            <Htag tag='s'>
                                {a}
                            </Htag>
                        </>
                    :
                    <>
                        <input id={a.answer} type="radio" name={a.answer} />
                        <Htag tag='s'>
                            {a.answer}
                        </Htag>
                        <input id={a.answer + '_Area'} type="text" name={a.answer} />
                    </>
                ))}
            </form>
        </div>
    );
};
