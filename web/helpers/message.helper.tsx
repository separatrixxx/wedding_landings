import axios from "axios";
import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";
import { setLocale } from "./locale.helper";


export async function sendMessage(message: string, email: string, setMessage: (e: string) => void, router: any) {
    if (message.length !== 0) {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/emails', {
            "data": {
                "to": email,
                "subject": setLocale(router.locale).message_from_a_guest,
                "text": message,
                "html": ""
            }
        })
            .then(function () {
                ToastSuccess(setLocale(router.locale).message_sent_succesfully);

                setMessage('');
            })
            .catch(function (error: string) {
                ToastError(error);
            });
    } else {
        ToastError(setLocale(router.locale).message_error);
    }
}
