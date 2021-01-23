import { getLang } from './lang';

export default async function getWeatherForecast(locationCoordinates) {
    const lang = getLang();
    const WHEATHER_API_TOKEN = '1cd4a4390fe5b3387ac039c79c67c02c';
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${WHEATHER_API_TOKEN}/${locationCoordinates}?lang=${lang}`)
        .then((response) => response.json());
}
