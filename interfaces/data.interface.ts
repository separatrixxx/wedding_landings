export interface DataInterface {
    theme: '' | 'minimal' | 'romance' | 'photo',
    groomName: string,
    brideName: string,
    date: string,
    time: string,
    location: string,
    locationMap: string,
    restourant: string,
    letter: string,
    questions: QuestionInterface[],
    dressCode: DressCodeInterface,
    dressCodeText: string,
    agenda: AgendaInterface[],
    howToGet: HowToGetInterface[],
}

export interface QuestionInterface {
    question: string,
    answers: (string | {
        answer: string,
        isTextArea?: boolean,
        isOnlyOne?: boolean,
    })[],
}

export interface AnswerInterface {
    question: string,
    answers: { text: string, detail?: string }[];
}

export interface DressCodeInterface {
    text: string,
    colors: string[],
}

export interface AgendaInterface {
    time: string,
    title: string,
    description: string,
}

export interface HowToGetInterface {
    title: string,
    text: string,
}
