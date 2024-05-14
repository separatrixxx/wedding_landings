import { DataInterface } from "../interfaces/data.interface";
import { setLocale } from "./locale.helper";


export function addDateToCalendar(data: DataInterface, router: any) {
    const formattedDate = data.date.split('T')[0].split('-').reverse().join('');

    const dateParts = data.date.split('-');
    const isoFormattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    const dateObject = new Date(isoFormattedDate);
    const localeData = setLocale(router.locale);
    const userAgent = window.navigator.userAgent;
    const isiOS = /iPhone|iPad|iPod/i.test(userAgent);

    const details = localeData.wedding + ' ' + data.brideName + '&' + data.groomName + ' ' + localeData.at + ' ' + data.time;
    const location = data.location + ', ' + data.restourant;

    let url: string;
    if (!isiOS) {
        url = `https://www.google.com/calendar/render?action=TEMPLATE&dates=${formattedDate}/${formattedDate}&ctz=UTC&details=${encodeURIComponent(details)}&location=${data.location + ', ' + data.restourant}&text=${localeData.wedding + ' ' + data.brideName + '&' + data.groomName + ' ' + localeData.at + ' ' + data.time}`;
        window.open(url, '_blank');
    } else {
        var icsMSG = `BEGIN:VCALENDAR\nVERSION:2.0\r\nPRODID:-//Your Company//NONSGML v1.0//EN\r\nBEGIN:VEVENT\r\nUID:me@google.com\r\nDTSTAMP:${formattedDate}\r\nATTENDEE;CN=${data.brideName};RSVP=TRUE:MAILTO:me@gmail.com\r\nORGANIZER;CN=Organizer:MAILTO:me@gmail.com\r\nDTSTART:${formattedDate}\r\nLOCATION:${encodeURIComponent(location)}\r\nSUMMARY:${encodeURIComponent(details)}\r\nEND:VEVENT\r\nEND:VCALENDAR`;
        var title = "newEvent.ics";
        var uri = "data:text/calendar;charset=utf8," + escape(icsMSG);

        var link = document.createElement("a");
        link.href = uri;
        link.download = title;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
