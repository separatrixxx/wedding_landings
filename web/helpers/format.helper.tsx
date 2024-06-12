export function formatDateMinimal(date: string): string {
    const len = date.length;

    date = date.slice(0, len - 4) + date.slice(len - 2, len);

    return date.replace(/-/g, "\n");
}

export function formatDateRomance(date: string): string {
    const len = date.length;

    date = date.slice(0, len - 4) + date.slice(len - 2, len);

    return date.replace(/-/g, "/");
}
