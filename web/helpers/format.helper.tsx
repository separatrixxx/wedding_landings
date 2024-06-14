export function formatDateMinimal(date: string): string {
    const len = date.length;

    date = date.slice(len - 2, len) + date.slice(4, len - 2) + date.slice(2, 4);

    return date.replace(/-/g, "\n");
}

export function formatDateRomance(date: string): string {
    const len = date.length;

    date = date.slice(len - 2, len) + date.slice(4, len - 2) + date.slice(2, 4);

    return date.replace(/-/g, "/");
}

export function formatTime(time: string): string {
    return time.slice(0, 5);
}

export function formatDateString(date: string): string {
    const parts = date.split('T');
    const datePart = parts[0];
    const timePart = parts[1].slice(0, 5);
  
    const [year, month, day] = datePart.split('-');
    
    return `${day}-${month}-${year}T${timePart}`;
  }
