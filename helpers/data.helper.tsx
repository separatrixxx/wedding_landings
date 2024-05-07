import { DataInterface } from "../interfaces/data.interface";
import { setData } from "../features/data/dataSlice";


export function getData(dispatch: any) {
    const data: DataInterface = {
        theme: 'minimal',
        groomName: 'Ivan',
        brideName: 'Maria',
        date: '29-08-2024',
        time: '14:00',
        location: 'Georgia, Tbilisi',
        restourant: 'Restaurant Keto&Kote',
        letter: "Dear guest,\n\nWe're happy to announce that on 29 of August 2024 we will celebrate one of the most special days in our life - our wedding! And we'll be more than happy to share this important moment with you!\n\nPlease, confirm your attendance\n\nMaria&Ivan",
        questions: [
            {
                question: "DO YOU NEED A TRANSFER?",
                answers: ["yes, to the wedding", "yes, from the wedding", "yes, both ways", "no, thank you"],
            },
            {
                question: "WHAT KIND OF ALCOHOL DRINKS YOU PREFER?",
                answers: ["red wine", "white wine", "champagne", "whiskey/cognac", "vodka", "i don’t drink alcohol"],
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
    };

    dispatch(setData(data));
}