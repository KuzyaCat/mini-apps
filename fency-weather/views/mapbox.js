import mapboxgl from 'mapbox-gl';

export default function getMapbox(latitude, longitude) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia3V6eWFjYXQiLCJhIjoiY2s0NGp0amJkMDJ3azNsbnp0MGt5a2ZhbCJ9.KuUhYi_xkVfItuHCzC1BAw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 12,
        center: [longitude, latitude],
    });

    return map;
}
