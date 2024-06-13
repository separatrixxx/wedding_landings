import axios from "axios";
import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";
import { setLocale } from "./locale.helper";


export async function confirmPresence(name: string, email: string, router: any) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/emails', {
        "data": {
            "to": email,
            "subject": setLocale(router.locale).confirm_text1,
            "text": setLocale(router.locale).guest + ' ' + name + ' ' + setLocale(router.locale).confirm_text2,
            "html": ""
        }
    })
        .then(function () {
            ToastSuccess(setLocale(router.locale).presence_confirmed);
        })
        .catch(function (error: string) {
            ToastError(error);
        });
}
