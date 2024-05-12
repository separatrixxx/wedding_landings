import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";
import { setLocale } from "./locale.helper";


export function sendMessage(message: string, setMessage: (e: string) => void, router: any) {
    if (message.length !== 0) {
        ToastSuccess(setLocale(router.locale).message_sent_succesfully);

        setMessage('');
    } else {
        ToastError(setLocale(router.locale).message_error);
    }
}
