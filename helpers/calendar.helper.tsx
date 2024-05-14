import { DataInterface } from "../interfaces/data.interface";
import { setLocale } from "./locale.helper";


export function addDateToCalendar(data: DataInterface, router: any) {
    // Переформатируем дату в формат, который понимает JavaScript: YYYY-MM-DD
    const dateParts = data.date.split('-');
    const isoFormattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

    const localeData = setLocale(router.locale);
    const details = encodeURIComponent(localeData.wedding + ' ' + data.brideName + '&' + data.groomName + ' ' + localeData.at + ' ' + data.time);
    const location = encodeURIComponent(data.location + ', ' + data.restourant);

    const userAgent = window.navigator.userAgent;
    const isiOS = /iPhone|iPad|iPod/i.test(userAgent);

    let url: string;

    // Создаем объекты Date из ISO строки
    const startTime = new Date(isoFormattedDate).toISOString().replace(/-|:|\.\d{3}/g, '');
    const endTime = new Date(isoFormattedDate).toISOString().replace(/-|:|\.\d{3}/g, ''); // Добавьте время окончания, если требуется

    if (isiOS) {
        // Создаем URL для .ics формата, который можно открыть на устройствах Apple
        url = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${startTime}\nDTEND:${endTime}\nSUMMARY:${localeData.wedding + ' ' + data.brideName + '&' + data.groomName}\nLOCATION:${data.location + ', ' + data.restourant}\nDESCRIPTION:${details}\nEND:VEVENT\nEND:VCALENDAR`;
    } else {
        // Используем Google Calendar для других устройств
        const formattedDate = isoFormattedDate.split('-').join('');
        url = `https://www.google.com/calendar/render?action=TEMPLATE&dates=${formattedDate}/${formattedDate}&ctz=UTC&details=${details}&location=${location}&text=${encodeURIComponent(localeData.wedding + ' ' + data.brideName + '&' + data.groomName)}`;
    }

    window.open(url, '_blank');
}
