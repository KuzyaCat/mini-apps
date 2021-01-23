import { getUserLocation, getLocationByCity } from './user/location';
import { setLang, getLang } from './user/lang';
import getWeatherForecast from './user/forecast';
import { setTempUnit, getTempUnit } from './user/temperature-unit';
import getBackgroundImage from './user/get-background';
import renderBackgroundImage from './views/render-background';
import renderForecastInfo from './views/forecast-info';
import renderEvents from './events/render-events';

require('./style.css');

async function init() {
    setLang(getLang());
    setTempUnit(getTempUnit());
    const location = await getUserLocation();
    const { city } = location;
    const loc = await getLocationByCity(city);
    const { lat: latitude, lng: longitude } = loc.results[0].geometry;
    const { country, state } = loc.results[0].components;

    const forecast = await getWeatherForecast(`${latitude},${longitude}`);
    const { currently, daily } = forecast;

    const img = await getBackgroundImage();
    const { urls: { full } } = img;
    renderBackgroundImage(full);

    renderEvents();
    renderForecastInfo(currently, daily, state, country, latitude, longitude);
}

init();
