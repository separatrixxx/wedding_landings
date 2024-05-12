import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { AnswerInterface, QuestionInterface } from '../../../interfaces/data.interface';


export interface QuestionItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    question: QuestionInterface,
    type: '' | 'minimal' | 'romance' | 'photo',
    setAnswers: (e: any) => void,
}
