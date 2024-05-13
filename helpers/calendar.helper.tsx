import { DataInterface } from "../interfaces/data.interface";
import { setLocale } from "./locale.helper";


export function addDateToCalendar(data: DataInterface, router: any) {
    const formattedDate = data.date.split('T')[0].split('-').reverse().join('');

    const localeData = setLocale(router.locale);
    const details = encodeURIComponent(localeData.wedding + ' ' + data.brideName + '&' + data.groomName + ' ' + localeData.at + ' ' + data.time);
    const location = encodeURIComponent(data.location + ', ' + data.restourant);

    const userAgent = window.navigator.userAgent;
    const isiOS = /iPhone|iPad|iPod/i.test(userAgent);

    let url: string;

    if (isiOS) {
        url = `https://calendar.apple.com/?action=TEMPLATE&dates=${formattedDate}/${formattedDate}
        &ctz=UTC&details=${details}&location=${location}&text=
        ${encodeURIComponent(localeData.wedding + ' ' + data.brideName + '&' + data.groomName)}`;
    } else {
        url = `https://www.google.com/calendar/render?action=TEMPLATE&dates=${formattedDate}/${formattedDate}
        &ctz=UTC&details=${details}&location=${location}&text=
        ${encodeURIComponent(localeData.wedding + ' ' + data.brideName + '&' + data.groomName)}`;

    }

    window.open(url, '_blank');
}
