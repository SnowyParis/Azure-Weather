import {
  getCurrentWeather,
  getWeatherForecast,
  searchCities,
} from "../services/weatherAPI.js";
import { useState, useEffect, useCallback } from "react";

export const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  // const [aqi, setAqi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherByCity = useCallback(async (city) => {
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

  // const fetchAqiByLocation = async (latitude, longitude) => {
  //     setLoading(true);
  //     setError(null);

  //     try {
  //         const aqiData = await Promise.all([getAQI(latitude, longitude)]);

  //         // setAqi(aqiData);
  //     }
  //     catch (error)
  //     {
  //         setError(error instanceof Error ? error.message : "Failed to fetch AQI data.");
  //     }
  //     finally
  //     {
  //         setLoading(false);
  //     }
  // };

  //loading default
  useEffect(() => {
    fetchWeatherByCity("Cape Town");
    // fetchAqiByLocation(-33.9258, 18.4232);
  }, [fetchWeatherByCity]);

  return { currentWeather, forecast, loading, error, fetchWeatherByCity };
};
