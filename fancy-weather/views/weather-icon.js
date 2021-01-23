function daySwitcher(elements, day) {
    switch (day) {
    case 0: {
        elements.forEach((item) => {
            item.classList.add('icon-day_current');
            const dataList = document.querySelectorAll('.info-weather-data_list')[0];
            dataList.appendChild(item);
        });
        break;
    }
    case 1: {
        elements.forEach((item) => {
            item.classList.add('icon-day_next');
            const container = document.querySelectorAll('.info-next-item-weather')[0];
            container.appendChild(item);
        });
        break;
    }
    case 2: {
        elements.forEach((item) => {
            item.classList.add('icon-day_next');
            const container = document.querySelectorAll('.info-next-item-weather')[1];
            container.appendChild(item);
        });
        break;
    }
    case 3: {
        elements.forEach((item) => {
            item.classList.add('icon-day_next');
            const container = document.querySelectorAll('.info-next-item-weather')[2];
            container.appendChild(item);
        });
        break;
    }
    default: throw new Error('Something went wrong');
    }
}

export default function getWeatherIcon(icon, day) {
    switch (icon) {
    case 'partly-cloudy-day': {
        const sunIcon = document.createElement('i');
        sunIcon.classList.add('fas');
        sunIcon.classList.add('fa-sun');
        const cloudIcon = document.createElement('i');
        cloudIcon.classList.add('fas');
        cloudIcon.classList.add('fa-cloud');
        daySwitcher([sunIcon, cloudIcon], day);
        break;
    }
    case 'partly-cloudy-night': {
        const moonIcon = document.createElement('i');
        moonIcon.classList.add('fas');
        moonIcon.classList.add('fa-moon');
        const cloudIcon = document.createElement('i');
        cloudIcon.classList.add('fas');
        cloudIcon.classList.add('fa-cloud');
        daySwitcher([moonIcon, cloudIcon], day);
        break;
    }
    case 'clear-day': {
        const sunIcon = document.createElement('i');
        sunIcon.classList.add('sun_alone');
        sunIcon.classList.add('fas');
        sunIcon.classList.add('fa-sun');
        daySwitcher([sunIcon], day);
        break;
    }
    case 'clear-night': {
        const moonIcon = document.createElement('i');
        moonIcon.classList.add('moon_alone');
        moonIcon.classList.add('fas');
        moonIcon.classList.add('fa-moon');
        daySwitcher([moonIcon], day);
        break;
    }
    case 'rain': {
        const rainIcon = document.createElement('i');
        rainIcon.classList.add('fas');
        rainIcon.classList.add('fa-cloud-showers-heavy');
        daySwitcher([rainIcon], day);
        break;
    }
    case 'snow': {
        const cloudIcon = document.createElement('i');
        cloudIcon.classList.add('fas');
        cloudIcon.classList.add('fa-cloud');
        const snowIcon = document.createElement('i');
        snowIcon.classList.add('fas');
        snowIcon.classList.add('fa-snowflake');
        daySwitcher([cloudIcon, snowIcon], day);
        break;
    }
    case 'sleet': {
        const rainIcon = document.createElement('i');
        rainIcon.classList.add('fas');
        rainIcon.classList.add('fa-cloud-showers-heavy');
        const snowIcon = document.createElement('i');
        snowIcon.classList.add('fas');
        snowIcon.classList.add('fa-snowflake');
        daySwitcher([rainIcon, snowIcon], day);
        break;
    }
    case 'wind': {
        const windIcon = document.createElement('i');
        windIcon.classList.add('fas');
        windIcon.classList.add('fa-wind');
        daySwitcher([windIcon], day);
        break;
    }
    case 'fog': {
        const fogIcon = document.createElement('i');
        fogIcon.classList.add('fas');
        fogIcon.classList.add('fa-smog');
        daySwitcher([fogIcon], day);
        break;
    }
    case 'cloudy': {
        const cloudIcon = document.createElement('i');
        cloudIcon.classList.add('fas');
        cloudIcon.classList.add('fa-cloud');
        daySwitcher([cloudIcon], day);
        break;
    }
    default: {
        const cloudIcon = document.createElement('i');
        cloudIcon.classList.add('fas fa-cloud');
        daySwitcher([cloudIcon], day);
    }
    }
}
