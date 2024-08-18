export function getStringedDate(targetDate) {
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth() + 1;
    const date = targetDate.getDate();
    if (month < 10) {
        return `${year}-0${month}-${date}`;
    }
    if (date < 10) {
        return `${year}-${month}-0${date}`;
    }
    return `${year}-${month}-${date}`;
}