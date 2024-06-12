import { ToastSuccess } from "../components/Common/Toast/Toast";
import { setLocale } from "./locale.helper";


export function confirmPresence(name: string, router: any) {
    ToastSuccess(setLocale(router.locale).presence_confirmed);
}
