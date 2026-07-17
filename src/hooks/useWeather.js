import { useState, useEffect } from 'react';
import { fetchWeatherData, fetchWeatherByCoords, getCityByIP } from '../services/weatherApi';

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('F'); 

  const searchCity = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
    } catch {
      setError('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getDeviceLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }
    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const data = await fetchWeatherByCoords(latitude, longitude);
          setWeather(data);
        } catch {
          setError('Error getting weather for your location.');
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError('Location permission denied.');
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    const initApp = async () => {
      const initialCity = await getCityByIP();
      await searchCity(initialCity);
    };
    initApp();
  }, []);

  return {
    weather,
    loading,
    error,
    unit,
    setUnit,
    searchCity,
    getDeviceLocation
  };
}