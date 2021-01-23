export function getLang() {
    return localStorage.getItem('lang') || 'en';
}

export function setLang(lang) {
    const activeLangs = document.querySelectorAll('.lang.active');
    if (activeLangs.length > 0) {
        document.querySelectorAll('.lang.active')[0].classList.remove('active');
    }
    document.getElementById(lang).classList.add('active');
    localStorage.setItem('lang', lang);
}

const translations = {
    en: {
        humidity: 'Humidity',
        windSpeed: 'Wind speed (km/h)',
        latitude: 'Latitude',
        longitude: 'Longitude',
        feelslike: 'Feels like',
    },
    ru: {
        humidity: 'Влажность',
        windSpeed: 'Скорость ветра (км/ч)',
        latitude: 'Широта',
        longitude: 'Долгота',
        feelslike: 'Ощущается как',
    },
    be: {
        humidity: 'Вільготнасць',
        windSpeed: 'Хуткасць ветру (км/г)',
        latitude: 'Шырата',
        longitude: 'Даўгата',
        feelslike: 'Адчуваецца як',
    },
};

export function translate(lang, key) {
    return translations[lang][key];
}
