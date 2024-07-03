import axios from "axios";
import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";
import { setLocale } from "./locale.helper";


export async function sendMessage(message: string, emails: string[], setMessage: (e: string) => void, router: any) {
    if (message.length !== 0) {
        const requests = emails.map(email => {
            return axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/emails', {
                "data": {
                    "to": email,
                    "subject": setLocale(router.locale).message_from_a_guest,
                    "text": message,
                    "html": ""
                }
            });
        });

        try {
            await Promise.all(requests);
            ToastSuccess(setLocale(router.locale).message_sent_succesfully);
            setMessage('');
        } catch (error: any) {
            ToastError(error);
        }
    } else {
        ToastError(setLocale(router.locale).message_error);
    }
}
