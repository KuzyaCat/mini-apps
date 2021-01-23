import { getSeason } from './date';

export default async function getBackgroundImage() {
    const season = getSeason();
    const IMAGE_TOKEN = '2f68f94dd58f81d59c596303d338bad9df55f39e915415dc2b888fce101b0ba4';
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${season}&client_id=${IMAGE_TOKEN}`;
    return fetch(url)
        .then((response) => response.json());
}
