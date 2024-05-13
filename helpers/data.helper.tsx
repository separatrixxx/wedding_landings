import { DataInterface } from "../interfaces/data.interface";
import { setData } from "../features/data/dataSlice";


export function getData(dispatch: any, theme: '' | 'minimal' | 'romance' | 'photo') {
    const data: DataInterface = {
        theme: theme,
        groomName: 'Ivan',
        brideName: 'Maria',
        date: '29-08-2024',
        time: '14:00',
        location: 'Georgia, Tbilisi',
        locationMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1252.4049322417047!2d44.788262921568815!3d41.704597571601134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cda58186cf3%3A0x970c6e7fc66ca250!2z0JrQtdGC0L4g0LTQsCDQmtC-0YLRjQ!5e0!3m2!1sru!2sru!4v1715362220134!5m2!1sru!2sru',
        restourant: 'Restaurant Keto&Kote',
        letter: "Dear guest,\n\nWe're happy to announce that on 29 of August 2024 we will celebrate one of the most special days in our life - our wedding! And we'll be more than happy to share this important moment with you!\n\nPlease, confirm your attendance\n\nMaria&Ivan",
        questions: [
            {
                question: "DO YOU NEED A TRANSFER?",
                answers: ["yes, to the wedding", "yes, from the wedding", "yes, both ways", "no, thank you"],
            },
            {
                question: "WHAT KIND OF ALCOHOL DRINKS YOU PREFER?",
                answers: ["red wine", "white wine", "champagne", "whiskey/cognac", "vodka", {
                    answer: "i don’t drink alcohol",
                    isOnlyOne: true,
                }],
            },
            {
                question: "DO YOU HAVE food preferences or allergies?",
                answers: ["no", {
                    answer: "yes (please clarify)",
                    isTextArea: true,
                }],
            },
            {
                question: "ARE YOU GOING TO TAKE CHILDREN WITH YOU?",
                answers: ["yes", "no"],
            },
        ],
        dressCode: {
            text: "BLACK TIE",
            colors: ["#33522B", "#2A184F", "#FAFFC1", "#E1E4FF"],
        },
        dressCodeText: "We would be grateful if you take our dress code into account when choosing your outfit",
        agenda: [
            {
                time: "14:00",
                title: "WELCOME DRINK",
                description: "we want you to start this day with a glass of champagne",
            },
            {
                time: "15:00",
                title: "CEREMONY",
                description: "share this special moment with us",
            },
            {
                time: "17:00",
                title: "DINNER",
                description: "there is no reason to limit yourself in delicious food",
            },
            {
                time: "19:00",
                title: "FIRST DANCE",
                description: "don't judge us:)",
            },
            {
                time: "19:15",
                title: "PARTY",
                description: "little party never kill nobody",
            },
            {
                time: "21:00",
                title: "CAKE CUTTING",
                description: "it's your piece of cake!",
            },
            {
                time: "22:00",
                title: "FIREWORKS",
                description: "more sparkles, please",
            },
        ],
        howToGet: [
            {
                title: "If you go by your own car",
                text: "Bla bla bla bla bla\nBlablablablablablablabalbalbalablablabalbalablabalbalab",
            },
            {
                title: "If you use group transfer",
                text: "Bla bla bla bla bla\nBlablablablablablablabalbalbalablablabalbalablabalbalab",
            },
        ],
        blocks: {
            timer: true,
            questions: true,
            dressCode: true,
            agenda: true,
            message: true,
            howToGet: true,
        },
    };

    dispatch(setData(data));
}