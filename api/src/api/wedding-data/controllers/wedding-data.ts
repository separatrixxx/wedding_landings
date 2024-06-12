/**
 * wedding-data controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::wedding-data.wedding-data', ({ strapi }) =>  ({
    async find(ctx) {
        ctx.query.populate = ['questions', 'questions.answers', 'dressCode', 'dressCode.colors', 'agenda',
            'howToGet', 'blocks', 'photoMain', 'photoQuestions', 'photos', 'stylesConfig', 'stylesConfig.colors',
            'stylesConfig.fonts'
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
                email: entity.attributes.email,
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
            }
        });

        return { data: newData };
    },

    async findOne(ctx) {
        ctx.query.populate = ['questions', 'questions.answers', 'dressCode', 'dressCode.colors', 'agenda',
            'howToGet', 'blocks', 'photoMain', 'photoQuestions', 'photos', 'stylesConfig', 'stylesConfig.colors',
            'stylesConfig.fonts'
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
            email: data.attributes.email,
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
        };

        return { data: newData };
    },
}));

