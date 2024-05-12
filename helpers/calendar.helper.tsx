import { DataInterface } from "../interfaces/data.interface";
import { setLocale } from "./locale.helper";


export function addDateToCalendar(data: DataInterface, router: any) {
    const formattedDate = data.date.split('T')[0].split('-').reverse().join('');

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&dates=
        ${formattedDate}/${formattedDate}&ctz=UTC&details=
        ${setLocale(router.locale).wedding + ' ' + data.brideName + '%26' + data.groomName + ' '
        + setLocale(router.locale).at + ' ' + data.time}
        &location=${data.location + ', ' + data.restourant.replace('&', '%26')}
        &text=${setLocale(router.locale).wedding + ' ' + data.brideName + '%26' + data.groomName}`;

    window.open(url, '_blank');
}
