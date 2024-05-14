import { DataInterface } from "../interfaces/data.interface";
import { setLocale } from "./locale.helper";


export function addDateToCalendar(data: DataInterface, router: any) {
    const dateParts = data.date.split('-');
    const isoFormattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    const dateObject = new Date(isoFormattedDate);
    const localeData = setLocale(router.locale);
    const userAgent = window.navigator.userAgent;
    const isiOS = /iPhone|iPad|iPod/i.test(userAgent);

    const startTime = dateObject.toISOString().replace(/-|:|\.\d{3}/g, '');
    const endTime = new Date(dateObject.getTime() + 3600000).toISOString().replace(/-|:|\.\d{3}/g, ''); // +1 hour for example

    const details = localeData.wedding + ' ' + data.brideName + '&' + data.groomName + ' ' + localeData.at + ' ' + data.time;
    const location = data.location + ', ' + data.restourant;

    let url: string;
    if (!isiOS) {
        // URL for non-iOS devices (Google Calendar)
        url = `https://www.google.com/calendar/render?action=TEMPLATE&dates=${startTime}/${endTime}&ctz=UTC&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&text=${encodeURIComponent(details)}`;
        window.open(url, '_blank');
    } else {
        // ICS format for iOS devices
        var icsMSG = `BEGIN:VCALENDAR\nVERSION:2.0\r\nPRODID:-//Your Company//NONSGML v1.0//EN\r\nBEGIN:VEVENT\r\nUID:me@google.com\r\nDTSTAMP:${startTime}\r\nATTENDEE;CN=${data.brideName};RSVP=TRUE:MAILTO:me@gmail.com\r\nORGANIZER;CN=Organizer:MAILTO:me@gmail.com\r\nDTSTART:${startTime}\r\nDTEND:${endTime}\r\nLOCATION:${encodeURIComponent(location)}\r\nSUMMARY:${encodeURIComponent(details)}\r\nEND:VEVENT\r\nEND:VCALENDAR`;
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
