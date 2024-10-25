import axios from "axios";
import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";
import { AnswerInterface, QuestionInterface } from "../interfaces/data.interface";
import { setLocale } from "./locale.helper";


export async function sendAnswers(questions: QuestionInterface[], answers: AnswerInterface[], name: string, emails: string[], router: any) {
    const allAnswered = questions.every(q => answers.some(a => a.question === q.question && a.answers.length > 0));
    
    if (allAnswered) {
        let message: string = '';

        for (let ans of answers) {
            message += ans.question;
            message += '\n';

            for (let a of ans.answers) {
                message += a.text;
                message += '\n';
            }

            message += '\n\n';
        }

        message += `${setLocale(router.locale).questions_text} ${name}`;

        const requests = emails.map(email => {
            return axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/emails', {
                "data": {
                    "to": email,
                    "subject": setLocale(router.locale).questions_text + ' ' + name,
                    "text": message,
                    "html": ""
                }
            });
        });

        try {
            await Promise.all(requests);
            ToastSuccess(setLocale(router.locale).questions_sent_succesfully);
        } catch (error: any) {
            ToastError(error);
        }
    } else {
        ToastError(setLocale(router.locale).questions_error);
    }
}
