import { QuestionItemProps } from './QuestionItem.props';
import styles from './QuestionItem.module.css';
import { useState, useEffect } from 'react';
import { AnswerInterface } from '../../../interfaces/data.interface';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const QuestionItem = ({ question, type, setAnswers }: QuestionItemProps): JSX.Element => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const [areaAnswer, setAreaAnswer] = useState<string>('');

    const hasOnlyOne = question.answers.some(a => typeof a !== 'string' && a.isOnlyOne);

    useEffect(() => {
        setSelectedAnswers([]);
    }, [hasOnlyOne]);

    const handleChange = (answer: string, isOnlyOne?: boolean, isTextArea?: boolean, detail?: string) => {
        setAnswers((prev: AnswerInterface[]) => {   
            if (hasOnlyOne) {
                if (isOnlyOne) {
                    setSelectedAnswers([answer]);
                    const newAnswers = [...prev.filter(a => a.question !== question.question), { question: question.question, answers: [answer] }];
                    return newAnswers;
                } else {
                    const filteredAnswers = selectedAnswers.filter(a => {
                        const answerDetails = question.answers.find(x => typeof x === 'object' ? x.answer === a : x === a);
                        return !(typeof answerDetails === 'object' && answerDetails.isOnlyOne);
                    });
    
                    const answerIndex = filteredAnswers.indexOf(answer);
                    if (answerIndex > -1) {
                        filteredAnswers.splice(answerIndex, 1);
                    } else {
                        filteredAnswers.push(answer);
                    }
    
                    setSelectedAnswers(filteredAnswers);
                    const newAnswers = [...prev.filter(a => a.question !== question.question), { question: question.question, answers: filteredAnswers
                        .map(f => detail ? f + ': ' + detail : f)
                    }];

                    return newAnswers;
                }
            } else {
                setSelectedAnswers([answer]);
                const newAnswers = [...prev.filter(a => a.question !== question.question), { question: question.question, answers: [
                    !isTextArea ? answer : answer + ': ' + detail
                ] }];

                return newAnswers;
            }
        });
    };
    

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>, answer: string) => {
        handleChange(answer, false, true, e.target.value);
    };

    return (
        <div className={cn(styles.questionItem, {
            [styles.minimalQuestionItem]: type === 'minimal',
            [styles.romanceQuestionItem]: type === 'romance',
            [styles.photoQuestionItem]: type === 'photo',
        })}>
            <Htag tag='m' className={styles.questionText}>
                {question.question}
            </Htag>
            <form className={styles.answerBlock}>
                {question.answers.map((a, i) => {
                    const answerText = typeof a === 'string' ? a : a.answer;
                    const isOnlyOne = typeof a !== 'string' && a.isOnlyOne;
                    const isTextArea = typeof a !== 'string' && a.isTextArea; 
                    

                    return (
                        <div key={i} className={styles.inputDiv}>
                            <input
                                id={i + answerText}
                                type={hasOnlyOne ? "checkbox" : "checkbox"}
                                name={question.question}
                                checked={selectedAnswers.includes(answerText)}
                                onChange={() => handleChange(answerText, isOnlyOne, isTextArea)}
                            />
                            <label htmlFor={i + answerText}>
                                <Htag tag='s'>{answerText}</Htag>
                            </label>
                            {isTextArea && selectedAnswers.includes(answerText) && (
                                <input id={answerText + '_area'} name={answerText} className={styles.textarea}
                                    value={(areaAnswer)}
                                    onChange={(e) => {
                                        setAreaAnswer(e.target.value);
                                        handleTextChange(e, a.answer)
                                    }} />
                            )}
                        </div>
                    );
                })}
            </form>
        </div>
    );
};
