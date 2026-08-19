import { getCurrentWeather, getWeatherForecast, searchCities } from "../services/weatherAPI.js";
import { useState, useEffect } from "react";

export const useWeather = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeatherByCity = async (city) => {
        setLoading(true);
        setError(null);

        try
        {
            const [weatherData, weatherForecast] = await Promise.all([
                getCurrentWeather(city),
                getWeatherForecast(city)
            ]);

            setCurrentWeather(weatherData);
            setForecast(weatherForecast);
        }
        catch (error)
        {
            setError(error instanceof Error ? error.message : "Failed to fetch weather data.");
        }
        finally
        {
            setLoading(false);
        }
    };

    //loading default 
    useEffect(() => {
        fetchWeatherByCity("Cape Town");
    });

    return { currentWeather, forecast, loading, error, fetchWeatherByCity };
};