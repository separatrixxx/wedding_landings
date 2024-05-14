import { DataInterface } from "../interfaces/data.interface";
import { setLocale } from "./locale.helper";


export function addDateToCalendar(data: DataInterface, router: any) {
    const formattedDate = data.date.split('T')[0].split('-').reverse().join('');

    const localeData = setLocale(router.locale);
    const userAgent = window.navigator.userAgent;
    const isiOS = /iPhone|iPad|iPod/i.test(userAgent);

    const titleText = localeData.wedding + ' ' + data.brideName + '&' + data.groomName;
    const details = localeData.wedding + ' ' + data.brideName + '&' + data.groomName + ' ' + localeData.at + ' ' + data.time;
    const location = data.location + ', ' + data.restourant;

    let url: string;
    if (!isiOS) {
        url = `https://www.google.com/calendar/render?action=TEMPLATE&dates=${formattedDate}/${formattedDate}&ctz=UTC&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&text=${encodeURIComponent(titleText)}`;
        window.open(url, '_blank');
    } else {
        const icsMSG = `BEGIN:VCALENDAR
            VERSION:2.0
            BEGIN:VEVENT
            UID:me@google.com
            DTSTAMP:${formattedDate}
            ATTENDEE;CN=${titleText};
            DTSTART:${formattedDate}
            DTEND:${formattedDate}
            LOCATION:${location}
            SUMMARY:${details}
            END:VEVENT
            END:VCALENDAR`;
        
        const title = "newEvent.ics";
        const uri = "data:text/calendar;charset=utf8," + escape(icsMSG);
        
        const link = document.createElement("a");
        link.href = uri;
        link.download = title;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
