export interface DataInterface {
    id: number,
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
    blocks: BlocksInterface,
    photoMain?: string,
    photoQuestions?: string,
    photos?: string[],
    email: string,
    stylesConfig: StylesConfigInterface,
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

export interface BlocksInterface {
    timer: boolean,
    questions: boolean,
    dressCode: boolean,
    agenda: boolean,
    message: boolean,
    howToGet: boolean,
}

export interface StylesConfigInterface {
    colors: {
        [key: string]: string | undefined;
        dark: string;
        light: string;
        textDark: string;
        textLight: string;
        error: string;
        primaryMinimal?: string;
        backgroundMinimal?: string;
        primaryRomance?: string;
        backgroundRomance?: string;
        primaryPhoto?: string;
        backgroundPhoto?: string;
    },
    fonts: {
        [key: string]: string | undefined;
        fontCommon: string;
        fontMinimal1?: string;
        fontMinimal2?: string;
        fontMinimal3?: string;
        fontRomance1?: string;
        fontRomance2?: string;
        fontRomance3?: string;
        fontPhoto1?: string;
        fontPhoto2?: string;
        fontPhoto3?: string;
    },
}

export interface DataPlural {
    data: DataInterface[],
}

export interface DataSingle {
    data: DataInterface,
}
