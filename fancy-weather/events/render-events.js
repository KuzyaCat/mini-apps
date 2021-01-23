import updateForecastInfo from '../views/update-forecast-info';
import { getUserLocation, getLocationByCity } from '../user/location';
import getLocationBySpeech from '../user/audio';
import { setLang } from '../user/lang';
import { setTempUnit, getTempUnit } from '../user/temperature-unit';
import { toCelsius } from '../user/convert-temperature';
import getWeatherForecast from '../user/forecast';
import getBackgroundImage from '../user/get-background';
import renderBackgroundImage from '../views/render-background';

const langBtns = document.querySelectorAll('.lang');
const tempBtns = document.querySelectorAll('.temperature_unit');
const refreshBtn = document.getElementById('refresh');
const searchBtn = document.getElementById('search_btn');
const microBtn = document.querySelectorAll('.fa-microphone')[0];

export default function renderEvents() {
    langBtns.forEach((item) => {
        item.addEventListener('click', async () => {
            setLang(item.id);

            const location = await getUserLocation();
            const city = document.getElementById('search_value').value || location.city;
            const loc = await getLocationByCity(city);
            const { lat: latitude, lng: longitude } = loc.results[0].geometry;
            const { country, state } = loc.results[0].components;
            document.querySelectorAll('.info')[0].style.opacity = 0.5;
            const forecast = await getWeatherForecast(`${latitude},${longitude}`);
            const { currently, daily } = forecast;
            const { temperature, apparentTemperature } = currently;
            const temp = getTempUnit() === 'F' ? temperature : toCelsius(temperature);
            const apparentTemp = item.getAttribute('data-temp') === 'F' ? apparentTemperature : toCelsius(apparentTemperature);
            updateForecastInfo(currently, daily, state, country, temp,
                apparentTemp, latitude, longitude);
            document.querySelectorAll('.info')[0].style.opacity = 1;
        });
    });

    tempBtns.forEach((item) => {
        item.addEventListener('click', async () => {
            setTempUnit(item.getAttribute('data-temp'));

            const location = await getUserLocation();
            const city = document.getElementById('search_value').value || location.city;
            const loc = await getLocationByCity(city);
            const { lat: latitude, lng: longitude } = loc.results[0].geometry;
            const { country, state } = loc.results[0].components;
            document.querySelectorAll('.info')[0].style.opacity = 0.5;
            const forecast = await getWeatherForecast(`${latitude},${longitude}`);
            const { currently, daily } = forecast;
            const { temperature, apparentTemperature } = currently;
            const temp = item.getAttribute('data-temp') === 'F' ? temperature : toCelsius(temperature);
            const apparentTemp = item.getAttribute('data-temp') === 'F' ? apparentTemperature : toCelsius(apparentTemperature);
            updateForecastInfo(currently, daily, state, country, temp,
                apparentTemp, latitude, longitude);
            document.querySelectorAll('.info')[0].style.opacity = 1;
        });
    });

    refreshBtn.addEventListener('click', async () => {
        const img = await getBackgroundImage();
        const { urls: { full } } = img;
        renderBackgroundImage(full);
    });

    searchBtn.addEventListener('click', async () => {
        const city = document.getElementById('search_value').value;
        const loc = await getLocationByCity(city);
        const { lat: latitude, lng: longitude } = loc.results[0].geometry;
        const { country, state } = loc.results[0].components;
        document.querySelectorAll('.info')[0].style.opacity = 0.5;
        const forecast = await getWeatherForecast(`${latitude},${longitude}`);
        const { currently, daily } = forecast;
        const { temperature, apparentTemperature } = currently;
        const temp = getTempUnit() === 'F' ? temperature : toCelsius(temperature);
        const apparentTemp = getTempUnit() === 'F' ? apparentTemperature : toCelsius(apparentTemperature);
        updateForecastInfo(currently, daily, state, country, temp,
            apparentTemp, latitude, longitude);
        document.querySelectorAll('.info')[0].style.opacity = 1;
    });

    microBtn.addEventListener('click', () => {
        getLocationBySpeech();
    });
}
