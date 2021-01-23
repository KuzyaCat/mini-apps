import updateForecastInfo from '../views/update-forecast-info';
import { getLocationByCity } from './location';
import { getTempUnit } from './temperature-unit';
import { toCelsius } from './convert-temperature';
import getWeatherForecast from './forecast';

export default async function getLocationBySpeech() {
    window.speechRecognition = window.webkitSpeechRecognition || window.speechRecognition;
    const recognition = new webkitSpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    let city = 'Minsk';

    recognition.addEventListener('result', (e) => {
        const transcript = Array.from(e.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join('');
        city = transcript;
    });

    const microBtn = document.querySelectorAll('.fa-microphone')[0];
    microBtn.classList.remove('fa-microphone');
    microBtn.classList.add('fa-microphone-alt');

    recognition.addEventListener('audioend', async () => {
        const loc = await getLocationByCity(city);
        const { lat: latitude, lng: longitude } = loc.results[0].geometry;
        const { country, state } = loc.results[0].components;
        document.querySelectorAll('.info')[0].style.opacity = 0.5;
        const forecast = await getWeatherForecast(`${latitude},${longitude}`);
        const { currently } = forecast;
        const { temperature, apparentTemperature } = currently;
        const temp = getTempUnit() === 'F' ? temperature : toCelsius(temperature);
        const apparentTemp = getTempUnit() === 'F' ? apparentTemperature : toCelsius(apparentTemperature);
        microBtn.classList.remove('fa-microphone-alt');
        microBtn.classList.add('fa-microphone');
        updateForecastInfo(currently, state, country, temp, apparentTemp, latitude, longitude);
        document.querySelectorAll('.info')[0].style.opacity = 1;
    });

    recognition.start();

    return city;
}
