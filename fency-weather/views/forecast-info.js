import { getTempUnit } from '../user/temperature-unit';
import { toCelsius } from '../user/convert-temperature';
import { translate, getLang } from '../user/lang';
import getWeatherIcon from './weather-icon';
import { getCurrentDate, getNextDays } from '../user/date';
import getMapbox from './mapbox';

export default function renderForecastInfo(currently, daily, city, country, latitude, longitude) {
    const {
        summary, windSpeed, humidity, temperature, apparentTemperature, icon,
    } = currently;
    const { data } = daily;

    const forecastContainer = document.getElementById('forecast');
    const forecastContentContainer = document.createElement('div');
    forecastContentContainer.classList.add('forecast_content');
    forecastContainer.appendChild(forecastContentContainer);

    /* Weather display's container */
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info');
    forecastContentContainer.appendChild(infoContainer);

    /* Map's container */
    const mapboxContainer = document.createElement('div');
    mapboxContainer.classList.add('mapbox');
    forecastContentContainer.appendChild(mapboxContainer);

    const mapContainer = document.createElement('div');
    mapContainer.id = 'map';
    mapboxContainer.appendChild(mapContainer);

    getMapbox(latitude, longitude);

    /* User data container */
    const userDataContainer = document.createElement('div');
    userDataContainer.classList.add('info-user_data');
    infoContainer.appendChild(userDataContainer);

    /* Weather data container */
    const wheatherContainer = document.createElement('div');
    wheatherContainer.classList.add('info-weather');
    infoContainer.appendChild(wheatherContainer);

    /* Temperature */
    const currentDegreesElement = document.createElement('span');
    const temp = getTempUnit() === 'F' ? temperature : toCelsius(temperature);
    currentDegreesElement.innerText = `${temp}°`;
    currentDegreesElement.classList.add('info-weather-current_degrees');
    if (getTempUnit() === 'F') {
        currentDegreesElement.style.fontSize = '5em';
        currentDegreesElement.style.marginTop = '80px';
    } else {
        currentDegreesElement.style.fontSize = '10em';
        currentDegreesElement.style.marginTop = '0';
    }
    wheatherContainer.appendChild(currentDegreesElement);

    /* Weather data list */
    const weatherDataList = document.createElement('div');
    weatherDataList.classList.add('info-weather-data_list');
    wheatherContainer.appendChild(weatherDataList);

    /* Weather icon */
    getWeatherIcon(icon, 0);

    /* City */
    const cityElement = document.createElement('p');
    cityElement.classList.add('info-user_data-city');
    cityElement.innerText = `${city}, ${country}`;
    userDataContainer.appendChild(cityElement);

    /* Date */
    const dateElement = document.createElement('p');
    dateElement.classList.add('info-user_data-date');
    dateElement.innerText = getCurrentDate();
    userDataContainer.appendChild(dateElement);

    /* Summary */
    const summaryElement = document.createElement('p');
    summaryElement.classList.add('info-weather-summary');
    summaryElement.innerText = summary;
    weatherDataList.appendChild(summaryElement);

    /* Wind */
    const windElement = document.createElement('p');
    windElement.classList.add('info-weather-wind');
    windElement.innerText = `${translate(getLang(), 'windSpeed')}: ${windSpeed}`;
    weatherDataList.appendChild(windElement);

    /* Feels like */
    const feelslikeElement = document.createElement('p');
    feelslikeElement.classList.add('info-weather-feelslike');
    const apparentTemp = getTempUnit() === 'F' ? apparentTemperature : toCelsius(apparentTemperature);
    feelslikeElement.innerText = `${translate(getLang(), 'feelslike')}: ${apparentTemp}°`;
    weatherDataList.appendChild(feelslikeElement);

    /* Humidity */
    const humidityElement = document.createElement('p');
    humidityElement.classList.add('info-weather-humidity');
    humidityElement.innerText = `${translate(getLang(), 'humidity')}: ${humidity * 100}%`;
    weatherDataList.appendChild(humidityElement);

    /* latitude, longitude */
    const coordContainer = document.createElement('div');
    coordContainer.classList.add('mapbox-coords');
    forecastContentContainer.appendChild(coordContainer);
    const latitudeElement = document.createElement('p');
    latitudeElement.classList.add('mapbox-coords-latitude');
    latitudeElement.innerText = `${translate(getLang(), 'latitude')}: ${latitude}`;
    const longitudeElement = document.createElement('p');
    longitudeElement.classList.add('mapbox-coords-longitude');
    longitudeElement.innerText = `${translate(getLang(), 'longitude')}: ${longitude}`;
    coordContainer.appendChild(latitudeElement);
    coordContainer.appendChild(longitudeElement);
    mapboxContainer.appendChild(coordContainer);

    /* Next days */
    const nextDaysContainer = document.createElement('div');
    nextDaysContainer.classList.add('info-next');
    infoContainer.appendChild(nextDaysContainer);
    for (let i = 0; i < 3; i += 1) {
        const nextDaysContainerItem = document.createElement('div');
        nextDaysContainerItem.classList.add('info-next-item');
        const nextDaysWeatherElement = document.createElement('div');
        nextDaysWeatherElement.classList.add('info-next-item-weather');
        const degreesElement = document.createElement('span');
        degreesElement.classList.add('info-next-item-weather-degrees');
        const nextDaysTemp = getTempUnit() === 'F' ? data[i + 1].temperatureMax : toCelsius(data[i + 1].temperatureMax);
        degreesElement.innerText = `${nextDaysTemp}°`;
        const weekdayElement = document.createElement('p');
        weekdayElement.classList.add('info-next-item');
        const weekdays = getNextDays();
        weekdayElement.innerText = weekdays[i];
        nextDaysWeatherElement.appendChild(degreesElement);
        nextDaysContainerItem.appendChild(nextDaysWeatherElement);
        nextDaysContainerItem.appendChild(weekdayElement);
        nextDaysContainer.appendChild(nextDaysContainerItem);
        const nextDaysWeatherIcon = document.createElement('i');
        getWeatherIcon(data[i + 1].icon, i + 1);
        nextDaysWeatherElement.appendChild(nextDaysWeatherIcon);
    }
}
