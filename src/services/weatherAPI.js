const API_KEY = import.meta.env.VITE_OWM_API_KEY;
const BASE_URL= "https://api.openweathermap.org/data/2.5";
const GEO_URL= "https://api.openweathermap.org/geo/1.0";

export const getCurrentWeather = async (city) => {
    try {
        const response = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`); //fetch the data from the API

        if (!response.ok) //response.ok is false
        {
            if (response.status === 404)
            {
                throw new Error(`${city} not found, please check the spelling and try again.`);
            }
            else if (response.status === 401)
            {
                throw new Error(`Invalid API Key, please check your OpenWeatherMap API configuration.`);
            }
        }
        // else
        // {
        //     throw new Error(`Weather service is temporarily unavailable. Please try again later.`);
        // }

        const data = await response.json(); //destructure the data from the response
       
        if (!data.dt) //if data.dt (i.e. timestamp) does not exist
        {
            data.dt = Math.floor(Date.now() / 1000);
        }

        return data;
    }
    catch (error)
    {
        if (error instanceof TypeError && error.message.includes("fetch"))
        {
            throw new Error("Network error, please check your internet connection and try again.");
        }

        throw error;
    }
};


export const getWeatherForecast = async (city) => {
    try {
        const response = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`); //fetch the data from the API

        if (!response.ok) 
        {
            if (response.status === 404)
            {
                throw new Error(`${city} not found, please check the spelling and try again.`);
            }
            else if (response.status === 401)
            {
                throw new Error(`Invalid API Key, please check your OpenWeatherMap API configuration.`);
            }
        }
        // else
        // {
        //     throw new Error(`Weather service is temporarily unavailable. Please try again later.`);
        // }

        return await response.json();
    }
    catch (errorr)
    {
        if (error instanceof TypeError && error.message.includes("fetch"))
        {
            throw new Error("Network error, please check your internet connection and try again.");
        }

        throw error;
    }
};


export const searchCities = async (query) => {
    try {
        const response = await fetch(
        `${GEO_URL}/direct?q=${query}&limit=5&appid=${API_KEY}`); //fetch the data from the API

        if (!response.ok) 
        {
            if (response.status === 401)
            {
                throw new Error(`Invalid API Key, please check your OpenWeatherMap API configuration.`);
            }
        }
        else
        {
            throw new Error(`Weather service is temporarily unavailable. Please try again later.`);
        }

        const data = await response.json(); //destructure the data from the response

        return data.map((city) => ({
            name: city.name,
            // country: city.country

        }));
    }
    catch (errorr)
    {
        if (error instanceof TypeError && error.message.includes("fetch"))
        {
            throw new Error("Network error, please check your internet connection and try again.");
        }

        throw error;
    }
};