const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

// 1. Obtener ubicación inicial por IP
export const getCityByIP = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) throw new Error('Error al obtener IP');
    const data = await response.json();
    return data.city || 'Tumbes';
  } catch (error) {
    console.error("Error al detectar ciudad:", error);
    return 'Tumbes';
  }
};

// 2. Obtener Clima y Pronóstico por ciudad
export const fetchWeatherData = async (city) => {
  const currentRes = await fetch(
    BASE_URL + '/weather?q=' + encodeURIComponent(city) + '&units=metric&appid=' + API_KEY
  );
  if (!currentRes.ok) throw new Error('City not found');
  const currentData = await currentRes.json();

  const forecastRes = await fetch(
    BASE_URL + '/forecast?q=' + encodeURIComponent(city) + '&units=metric&appid=' + API_KEY
  );
  if (!forecastRes.ok) throw new Error('Error in forecast');
  const forecastData = await forecastRes.json();

  return { current: currentData, forecast: forecastData };
};

// 3. Obtener Clima por Coordenadas GPS
export const fetchWeatherByCoords = async (lat, lon) => {
  const currentRes = await fetch(
    BASE_URL + '/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=' + API_KEY
  );
  const forecastRes = await fetch(
    BASE_URL + '/forecast?lat=' + lat + '&lon=' + lon + '&units=metric&appid=' + API_KEY
  );

  if (!currentRes.ok || !forecastRes.ok) throw new Error('Error with coordinates');

  return {
    current: await currentRes.json(),
    forecast: await forecastRes.json()
  };
};