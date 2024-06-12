import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";
import { AnswerInterface, QuestionInterface } from "../interfaces/data.interface";
import { setLocale } from "./locale.helper";


export function sendAnswers(questions: QuestionInterface[], answers: AnswerInterface[], name: string, router: any) {
    const allAnswered = questions.every(q => answers.some(a => a.question === q.question && a.answers.length > 0));
    
    if (allAnswered) {
        ToastSuccess(setLocale(router.locale).questions_sent_succesfully);

        console.log(name);
        console.log(answers);
    } else {
        ToastError(setLocale(router.locale).questions_error);
    }
}
