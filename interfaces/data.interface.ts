export interface DataInterface {
    theme: '' | 'minimal' | 'romance' | 'photo',
    groomName: string,
    brideName: string,
    date: string,
    time: string,
    location: string,
    restourant: string,
    letter: string,
    questions: QuestionInterface[],
    dressCode: DressCodeInterface,
    dressCodeText: string,
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
