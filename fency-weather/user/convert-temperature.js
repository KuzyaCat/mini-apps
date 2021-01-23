export function toFahrenheit(сelsius) {
    return Math.round((сelsius * 9) / 5 + 32);
}
export function toCelsius(fahrenheit) {
    return Math.round(((fahrenheit - 32) * 5) / 9);
}
