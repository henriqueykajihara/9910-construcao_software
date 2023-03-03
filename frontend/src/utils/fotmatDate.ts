export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    let day: number | string = date.getDay();
    if (day < 10) day = '0' + day

    let month: number | string = date.getMonth();
    if (month < 10) month = '0' + month
    return day + '/' + month + '/' + date.getFullYear();
}

export const formatHourAndMinutes = (dateString: string): string => {
    const date = new Date(dateString)
    return date.getHours() + ':' + date.getMinutes();
}