import { translate, getLang } from '../user/lang';
import { getTempUnit } from '../user/temperature-unit';
import { toCelsius } from '../user/convert-temperature';
import getWeatherIcon from './weather-icon';
import getMapbox from './mapbox';

export default function updateForecastInfo(currently, daily, city, country,
    temperature, apparentTemperature, latitude, longitude) {
    const {
        summary, windSpeed, humidity, icon,
    } = currently;
    const { data } = daily;

    /* Map */
    getMapbox(latitude, longitude);

    /* Weather icon */
    const iconsTodelete = document.querySelectorAll('.icon-day_current');
    iconsTodelete.forEach((item) => item.remove());
    getWeatherIcon(icon, 0);
    document.querySelectorAll('.info-weather-data_list')[0].style = 'flex-direction: column-reverse';

    /* Temperature */
    const currentDegreesElement = document.querySelectorAll('.info-weather-current_degrees')[0];
    currentDegreesElement.innerText = `${temperature}°`;
    if (getTempUnit() === 'F') {
        currentDegreesElement.style.fontSize = '5em';
        currentDegreesElement.style.marginTop = '80px';
    } else {
        currentDegreesElement.style.fontSize = '10em';
        currentDegreesElement.style.marginTop = '0';
    }

    /* Feels like */
    const feelslikeElement = document.querySelectorAll('.info-weather-feelslike')[0];
    feelslikeElement.innerText = `${translate(getLang(), 'feelslike')}: ${apparentTemperature}°`;

    /* Summary */
    const summaryElement = document.querySelectorAll('.info-weather-summary')[0];
    summaryElement.innerText = summary;

    /* Humidity */
    const humidityElement = document.querySelectorAll('.info-weather-humidity')[0];
    humidityElement.innerText = `${translate(getLang(), 'humidity')}: ${humidity * 100}%`;

    /* Wind */
    const windElement = document.querySelectorAll('.info-weather-wind')[0];
    windElement.innerText = `${translate(getLang(), 'windSpeed')}: ${windSpeed}`;

    /* City */
    const cityElement = document.querySelectorAll('.info-user_data-city')[0];
    cityElement.innerText = `${city}, ${country}`;

    /* latitude, longitude */
    const latitudeElement = document.querySelectorAll('.mapbox-coords-latitude')[0];
    latitudeElement.innerText = `${translate(getLang(), 'latitude')}: ${latitude}`;
    const longitudeElement = document.querySelectorAll('.mapbox-coords-longitude')[0];
    longitudeElement.innerText = `${translate(getLang(), 'longitude')}: ${longitude}`;

    /* Next days */
    const nextDaysIconsTodelete = document.querySelectorAll('.icon-day_next');
    nextDaysIconsTodelete.forEach((item) => item.remove());
    for (let i = 0; i < 3; i += 1) {
        getWeatherIcon(data[i + 1].icon, i + 1);
        const nextDaysTemp = getTempUnit() === 'F' ? data[i + 1].temperatureMax : toCelsius(data[i + 1].temperatureMax);
        const degreesElement = document.querySelectorAll('.info-next-item-weather-degrees')[i];
        degreesElement.innerText = `${nextDaysTemp}°`;
    }
}
