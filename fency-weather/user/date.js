export function getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = weekdays[today.getDay()];
    const hours = today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
    const mins = today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
    return `${dayOfWeek} ${dd} ${months[mm - 1]} ${hours}:${mins}`;
}

export function getNextDays() {
    const today = new Date();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = today.getDay();
    let nextDays = [];
    if (dayOfWeek === 4) {
        nextDays = ['Friday', 'Saturday', 'Sunday'];
    } else if (dayOfWeek === 5) {
        nextDays = ['Saturday', 'Sunday', 'Monday'];
    } else if (dayOfWeek === 6) {
        nextDays = ['Sunday', 'Monday', 'Tuesday'];
    } else {
        nextDays = [weekdays[dayOfWeek + 1], weekdays[dayOfWeek + 2], weekdays[dayOfWeek + 3]];
    }

    return nextDays;
}

export function getSeason() {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2);
    let season = '';
    if (+mm <= 2 || +mm === 12) season = 'winter';
    if (+mm > 2 && +mm <= 5) season = 'spring';
    if (+mm > 5 && +mm <= 8) season = 'summer';
    if (+mm > 8 && +mm <= 11) season = 'autumn';

    return season;
}
