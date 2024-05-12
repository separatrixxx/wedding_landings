import { ToastSuccess } from "../components/Common/Toast/Toast";
import { setLocale } from "./locale.helper";


export function confirmPresence(router: any) {
    ToastSuccess(setLocale(router.locale).presence_confirmed);
}
