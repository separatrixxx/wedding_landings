/**
 * wedding-data controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::wedding-data.wedding-data', ({ strapi }) =>  ({
    async find(ctx) {
        ctx.query.populate = ['questions', 'questions.answers', 'dressCode', 'dressCode.colors', 'agenda',
            'howToGet', 'blocks', 'photoMain', 'photoQuestions', 'photos', 'stylesConfig', 'stylesConfig.colors',
            'stylesConfig.fonts', 'email', 'localizations', 'localizations.questions', 'localizations.questions.answers', 
            'localizations.dressCode', 'localizations.dressCode.colors', 'localizations.agenda', 'localizations.howToGet', 
            'localizations.blocks', 'localizations.photoMain', 'localizations.photoQuestions', 'localizations.photos', 
            'localizations.stylesConfig', 'localizations.stylesConfig.colors', 'localizations.stylesConfig.fonts', 
            'localizations.email'
        ];

        const { data } = await super.find(ctx);

        const newData = data.map(entity => {
            return {
                id: entity.id,
                theme: entity.attributes.theme,
                groomName: entity.attributes.groomName,
                brideName: entity.attributes.brideName,
                date: entity.attributes.date,
                time: entity.attributes.time,
                location: entity.attributes.location,
                locationMap: entity.attributes.locationMap,
                restourant: entity.attributes.restourant,
                letter: entity.attributes.letter,
                email: entity.attributes.email.map(email => email.email),
                dressCodeText: entity.attributes.dressCodeText,
                questions: entity.attributes.questions.map(question => ({
                    question: question.question,
                    answers: question.answers.map(answer => ({
                        answer: answer.answer,
                        isTextArea: answer.isTextArea,
                        isOnlyOne: answer.isOnlyOne,
                    })),
                })),
                dressCode: {
                    text: entity.attributes.dressCode.text,
                    colors: entity.attributes.dressCode.colors.map(color => color.color),
                },
                agenda: entity.attributes.agenda.map(answer => ({
                    time: answer.time,
                    title: answer.title,
                    description: answer.description,
                })),
                howToGet: entity.attributes.howToGet.map(howToGet => ({
                    title: howToGet.title,
                    text: howToGet.text,
                })),
                blocks: entity.attributes.blocks,
                photoMain: entity.attributes.photoMain.data.attributes.url,
                photoQuestions: entity.attributes.photoQuestions.data.attributes.url,
                photos: entity.attributes.photos.data.map(photo => photo.attributes.url),
                stylesConfig: {
                    colors: {
                        dark: entity.attributes.stylesConfig.colors.dark,
                        light: entity.attributes.stylesConfig.colors.light,
                        textDark: entity.attributes.stylesConfig.colors.textDark,
                        textLight: entity.attributes.stylesConfig.colors.textLight,
                        error: entity.attributes.stylesConfig.colors.error,
                        primaryMinimal: entity.attributes.stylesConfig.colors.primaryMinimal,
                        backgroundMinimal: entity.attributes.stylesConfig.colors.backgroundMinimal,
                        primaryRomance: entity.attributes.stylesConfig.colors.primaryRomance,
                        backgroundRomance: entity.attributes.stylesConfig.colors.backgroundRomance,
                        primaryPhoto: entity.attributes.stylesConfig.colors.primaryPhoto,
                        backgroundPhoto: entity.attributes.stylesConfig.colors.backgroundPhoto,
                    },
                    fonts: {
                        fontCommon: entity.attributes.stylesConfig.fonts.fontCommon,
                        fontMinimal1: entity.attributes.stylesConfig.fonts.fontMinimal1,
                        fontMinimal2: entity.attributes.stylesConfig.fonts.fontMinimal2,
                        fontMinimal3: entity.attributes.stylesConfig.fonts.fontMinimal3,
                        fontRomance1: entity.attributes.stylesConfig.fonts.fontRomance1,
                        fontRomance2: entity.attributes.stylesConfig.fonts.fontRomance2,
                        fontRomance3: entity.attributes.stylesConfig.fonts.fontRomance3,
                        fontPhoto1: entity.attributes.stylesConfig.fonts.fontPhoto1,
                        fontPhoto2: entity.attributes.stylesConfig.fonts.fontPhoto2,
                        fontPhoto3: entity.attributes.stylesConfig.fonts.fontPhoto3,
                    },
                },
                link: entity.attributes.link,
                locale: entity.attributes.locale,
                localizations: {
                    id: entity.attributes.localizations.data[0].id,
                    theme: entity.attributes.localizations.data[0].attributes.theme,
                    groomName: entity.attributes.localizations.data[0].attributes.groomName,
                    brideName: entity.attributes.localizations.data[0].attributes.brideName,
                    date: entity.attributes.localizations.data[0].attributes.date,
                    time: entity.attributes.localizations.data[0].attributes.time,
                    location: entity.attributes.localizations.data[0].attributes.location,
                    locationMap: entity.attributes.localizations.data[0].attributes.locationMap,
                    restourant: entity.attributes.localizations.data[0].attributes.restourant,
                    letter: entity.attributes.localizations.data[0].attributes.letter,
                    email: entity.attributes.localizations.data[0].attributes.email.map(email => email.email),
                    dressCodeText: entity.attributes.localizations.data[0].attributes.dressCodeText,
                    questions: entity.attributes.localizations.data[0].attributes.questions.map(question => ({
                        question: question.question,
                        answers: question.answers.map(answer => ({
                            answer: answer.answer,
                            isTextArea: answer.isTextArea,
                            isOnlyOne: answer.isOnlyOne,
                        })),
                    })),
                    dressCode: {
                        text: entity.attributes.localizations.data[0].attributes.dressCode.text,
                        colors: entity.attributes.localizations.data[0].attributes.dressCode.colors.map(color => color.color),
                    },
                    agenda: entity.attributes.localizations.data[0].attributes.agenda.map(answer => ({
                        time: answer.time,
                        title: answer.title,
                        description: answer.description,
                    })),
                    howToGet: entity.attributes.localizations.data[0].attributes.howToGet.map(howToGet => ({
                        title: howToGet.title,
                        text: howToGet.text,
                    })),
                    blocks: entity.attributes.localizations.data[0].attributes.blocks,
                    photoMain: entity.attributes.localizations.data[0].attributes.photoMain.data.attributes.url,
                    photoQuestions: entity.attributes.localizations.data[0].attributes.photoQuestions.data.attributes.url,
                    photos: entity.attributes.localizations.data[0].attributes.photos.data.map(photo => photo.attributes.url),
                    stylesConfig: {
                        colors: {
                            dark: entity.attributes.localizations.data[0].attributes.stylesConfig.colors.dark,
                            light: entity.attributes.localizations.data[0].attributes.stylesConfig.colors.light,
                            textDark: entity.attributes.localizations.data[0].attributes.stylesConfig.colors.textDark,
                            textLight: entity.attributes.localizations.data[0].attributes.stylesConfig.colors.textLight,
                            error: entity.attributes.localizations.data[0].attributes.stylesConfig.colors.error,
                            primaryMinimal: entity.attributes.localizations.data[0].attributes.stylesConfig.colors.primaryMinimal,
                            backgroundMinimal: entity.attributes.localizations.data[0].attributes.stylesConfig.colors.backgroundMinimal,
                            primaryRomance: entity.attributes.localizations.data[0].attributes.stylesConfig.colors.primaryRomance,
                            backgroundRomance: entity.attributes.localizations.data[0].attributes.stylesConfig.colors.backgroundRomance,
                            primaryPhoto: entity.attributes.localizations.data[0].attributes.stylesConfig.colors.primaryPhoto,
                            backgroundPhoto: entity.attributes.localizations.data[0].attributes.stylesConfig.colors.backgroundPhoto,
                        },
                        fonts: {
                            fontCommon: entity.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontCommon,
                            fontMinimal1: entity.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontMinimal1,
                            fontMinimal2: entity.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontMinimal2,
                            fontMinimal3: entity.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontMinimal3,
                            fontRomance1: entity.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontRomance1,
                            fontRomance2: entity.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontRomance2,
                            fontRomance3: entity.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontRomance3,
                            fontPhoto1: entity.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontPhoto1,
                            fontPhoto2: entity.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontPhoto2,
                            fontPhoto3: entity.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontPhoto3,
                        },
                    },
                    link: entity.attributes.localizations.data[0].attributes.link,
                    locale: entity.attributes.locale,
                },
            }
        });

        return { data: newData };
    },

    async findOne(ctx) {
        ctx.query.populate = ['questions', 'questions.answers', 'dressCode', 'dressCode.colors', 'agenda',
            'howToGet', 'blocks', 'photoMain', 'photoQuestions', 'photos', 'stylesConfig', 'stylesConfig.colors',
            'stylesConfig.fonts', 'email', 'localizations', 'localizations.questions', 'localizations.questions.answers', 
            'localizations.dressCode', 'localizations.dressCode.colors', 'localizations.agenda', 'localizations.howToGet', 
            'localizations.blocks', 'localizations.photoMain', 'localizations.photoQuestions', 'localizations.photos', 
            'localizations.stylesConfig', 'localizations.stylesConfig.colors', 'localizations.stylesConfig.fonts', 
            'localizations.email'
        ];

        const { data } = await super.findOne(ctx);

        const newData = {
            id: data.id,
            theme: data.attributes.theme,
            groomName: data.attributes.groomName,
            brideName: data.attributes.brideName,
            date: data.attributes.date,
            time: data.attributes.time,
            location: data.attributes.location,
            locationMap: data.attributes.locationMap,
            restourant: data.attributes.restourant,
            letter: data.attributes.letter,
            email: data.attributes.email.map(email => email.email),
            dressCodeText: data.attributes.dressCodeText,
            questions: data.attributes.questions.map(question => ({
                question: question.question,
                answers: question.answers.map(answer => ({
                    answer: answer.answer,
                    isTextArea: answer.isTextArea,
                    isOnlyOne: answer.isOnlyOne,
                })),
            })),
            dressCode: {
                text: data.attributes.dressCode.text,
                colors: data.attributes.dressCode.colors.map(color => color.color),
            },
            agenda: data.attributes.agenda.map(answer => ({
                time: answer.time,
                title: answer.title,
                description: answer.description,
            })),
            howToGet: data.attributes.howToGet.map(howToGet => ({
                title: howToGet.title,
                text: howToGet.text,
            })),
            blocks: data.attributes.blocks,
            photoMain: data.attributes.photoMain.data.attributes.url,
            photoQuestions: data.attributes.photoQuestions.data.attributes.url,
            photos: data.attributes.photos.data.map(photo => photo.attributes.url),
            stylesConfig: {
                colors: {
                    dark: data.attributes.stylesConfig.colors.dark,
                    light: data.attributes.stylesConfig.colors.light,
                    textDark: data.attributes.stylesConfig.colors.textDark,
                    textLight: data.attributes.stylesConfig.colors.textLight,
                    error: data.attributes.stylesConfig.colors.error,
                    primaryMinimal: data.attributes.stylesConfig.colors.primaryMinimal,
                    backgroundMinimal: data.attributes.stylesConfig.colors.backgroundMinimal,
                    primaryRomance: data.attributes.stylesConfig.colors.primaryRomance,
                    backgroundRomance: data.attributes.stylesConfig.colors.backgroundRomance,
                    primaryPhoto: data.attributes.stylesConfig.colors.primaryPhoto,
                    backgroundPhoto: data.attributes.stylesConfig.colors.backgroundPhoto,
                },
                fonts: {
                    fontCommon: data.attributes.stylesConfig.fonts.fontCommon,
                    fontMinimal1: data.attributes.stylesConfig.fonts.fontMinimal1,
                    fontMinimal2: data.attributes.stylesConfig.fonts.fontMinimal2,
                    fontMinimal3: data.attributes.stylesConfig.fonts.fontMinimal3,
                    fontRomance1: data.attributes.stylesConfig.fonts.fontRomance1,
                    fontRomance2: data.attributes.stylesConfig.fonts.fontRomance2,
                    fontRomance3: data.attributes.stylesConfig.fonts.fontRomance3,
                    fontPhoto1: data.attributes.stylesConfig.fonts.fontPhoto1,
                    fontPhoto2: data.attributes.stylesConfig.fonts.fontPhoto2,
                    fontPhoto3: data.attributes.stylesConfig.fonts.fontPhoto3,
                },
            },
            link: data.attributes.link,
            locale: data.attributes.locale,
            localizations: {
                id: data.attributes.localizations.data[0].id,
                theme: data.attributes.localizations.data[0].attributes.theme,
                groomName: data.attributes.localizations.data[0].attributes.groomName,
                brideName: data.attributes.localizations.data[0].attributes.brideName,
                date: data.attributes.localizations.data[0].attributes.date,
                time: data.attributes.localizations.data[0].attributes.time,
                location: data.attributes.localizations.data[0].attributes.location,
                locationMap: data.attributes.localizations.data[0].attributes.locationMap,
                restourant: data.attributes.localizations.data[0].attributes.restourant,
                letter: data.attributes.localizations.data[0].attributes.letter,
                email: data.attributes.localizations.data[0].attributes.email.map(email => email.email),
                dressCodeText: data.attributes.localizations.data[0].attributes.dressCodeText,
                questions: data.attributes.localizations.data[0].attributes.questions.map(question => ({
                    question: question.question,
                    answers: question.answers.map(answer => ({
                        answer: answer.answer,
                        isTextArea: answer.isTextArea,
                        isOnlyOne: answer.isOnlyOne,
                    })),
                })),
                dressCode: {
                    text: data.attributes.localizations.data[0].attributes.dressCode.text,
                    colors: data.attributes.localizations.data[0].attributes.dressCode.colors.map(color => color.color),
                },
                agenda: data.attributes.localizations.data[0].attributes.agenda.map(answer => ({
                    time: answer.time,
                    title: answer.title,
                    description: answer.description,
                })),
                howToGet: data.attributes.localizations.data[0].attributes.howToGet.map(howToGet => ({
                    title: howToGet.title,
                    text: howToGet.text,
                })),
                blocks: data.attributes.localizations.data[0].attributes.blocks,
                photoMain: data.attributes.localizations.data[0].attributes.photoMain.data.attributes.url,
                photoQuestions: data.attributes.localizations.data[0].attributes.photoQuestions.data.attributes.url,
                photos: data.attributes.localizations.data[0].attributes.photos.data.map(photo => photo.attributes.url),
                stylesConfig: {
                    colors: {
                        dark: data.attributes.localizations.data[0].attributes.stylesConfig.colors.dark,
                        light: data.attributes.localizations.data[0].attributes.stylesConfig.colors.light,
                        textDark: data.attributes.localizations.data[0].attributes.stylesConfig.colors.textDark,
                        textLight: data.attributes.localizations.data[0].attributes.stylesConfig.colors.textLight,
                        error: data.attributes.localizations.data[0].attributes.stylesConfig.colors.error,
                        primaryMinimal: data.attributes.localizations.data[0].attributes.stylesConfig.colors.primaryMinimal,
                        backgroundMinimal: data.attributes.localizations.data[0].attributes.stylesConfig.colors.backgroundMinimal,
                        primaryRomance: data.attributes.localizations.data[0].attributes.stylesConfig.colors.primaryRomance,
                        backgroundRomance: data.attributes.localizations.data[0].attributes.stylesConfig.colors.backgroundRomance,
                        primaryPhoto: data.attributes.localizations.data[0].attributes.stylesConfig.colors.primaryPhoto,
                        backgroundPhoto: data.attributes.localizations.data[0].attributes.stylesConfig.colors.backgroundPhoto,
                    },
                    fonts: {
                        fontCommon: data.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontCommon,
                        fontMinimal1: data.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontMinimal1,
                        fontMinimal2: data.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontMinimal2,
                        fontMinimal3: data.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontMinimal3,
                        fontRomance1: data.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontRomance1,
                        fontRomance2: data.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontRomance2,
                        fontRomance3: data.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontRomance3,
                        fontPhoto1: data.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontPhoto1,
                        fontPhoto2: data.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontPhoto2,
                        fontPhoto3: data.attributes.localizations.data[0].attributes.stylesConfig.fonts.fontPhoto3,
                    },
                },
                link: data.attributes.localizations.data[0].attributes.link,
                locale: data.attributes.locale,
            },
        };

        return { data: newData };
    },
}));

