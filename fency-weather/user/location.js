import { getLang } from './lang';

export async function getUserLocation() {
    const LOCATION_API_TOKEN = '9b3eae60c5100a';
    return fetch(`https://ipinfo.io/json?token=${LOCATION_API_TOKEN}`)
        .then((response) => response.json());
}

export async function getLocationByCity(city) {
    const lang = getLang();
    const LOCATION_API_TOKEN = 'bc8ca4a94a4b4343934a867ebc8e09d3';
    return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${LOCATION_API_TOKEN}&pretty=1&no_annotations=1&language=${lang}`)
        .then((response) => response.json());
}
