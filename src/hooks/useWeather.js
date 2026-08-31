import { useState, useEffect, useCallback } from "react";
import {
  getCurrentWeather,
  getWeatherForecast,
  searchCities,
} from "../services/weatherAPI.js";

export const useWeather = (city) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherByCity = useCallback(async (city) => {
    if (!city?.trim()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const [weatherData, weatherForecast] = await Promise.all([
        getCurrentWeather(city),
        getWeatherForecast(city),
      ]);

      setCurrentWeather(weatherData);
      setForecast(weatherForecast);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to fetch weather data.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeatherByCity(city);
  }, [city, fetchWeatherByCity]);

  return { currentWeather, forecast, loading, error, fetchWeatherByCity };
};
