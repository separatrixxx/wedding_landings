export interface DataInterface {
    theme: '' | 'minimal' | 'romance' | 'photo',
    groomName: string,
    brideName: string,
    date: string,
    location: string,
    restourant: string,
    letter: string,
    questions: QuestionInterface[],
    dressCode: DressCodeInterface,
}

export interface QuestionInterface {
    question: string,
    answers: (string | {
        answer: string,
        isTextArea: boolean,
    })[],
}

export interface AnswerInterface {
    question: string,
    answer: string,
}

export interface DressCodeInterface {
    text: string,
    colors: string[],
}
