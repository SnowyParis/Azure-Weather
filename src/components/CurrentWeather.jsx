import { formatTemperature, formatTime, TimeGreeting } from "../utils/weatherutils.js";
import WeatherIcon from "./WeatherIcon.jsx";
import {
  FiMapPin,
  FiArrowUp,
  FiArrowDown,
  FiSunrise,
  FiSunset,
} from "react-icons/fi";

function CurrentWeather({ weather, aqi }) {
  return (
    <section className="glass-strong relative min-h-95 mt-4 overflow-hidden rounded-[2.5rem] p-6 sm:p-9">
      <div className="flex justify-between max-sm:flex-col-reverse max-sm:gap-3">
        <p className="mb-2 font-medium text-sm text-muted-foreground">
          Good {TimeGreeting(new Date(weather.dt * 1000).toLocaleTimeString("en-GB"))} — here is your forecast
        </p>

        <div className="w-30 rounded-full px-3 py-1 text-xs bg-primary/30 text-primary">
          <strong>
            Local time{" "}
            {new Date(weather.dt * 1000).toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </strong>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <FiMapPin className="text-xl text-primary" />

        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          {weather.name}
        </h1>
      </div>

      <p className="mt-1 text-sm text-muted-foreground">
        {aqi.location.state && (<span>{aqi.location.state}, </span>)}
        {weather.sys.country} •{" "}
        {new Date(weather.dt * 1000).toLocaleDateString("en-GB", {
          weekday: "long",
          month: "short",
          day: "numeric",
        })}{" "}
        •{" "}
        {new Date(weather.dt * 1000).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>

      <div className="mt-10 flex flex-col items-start gap-5 md:ml-11 md:flex-row md:items-center md:gap-14">
        <WeatherIcon type={weather.weather[0].main} size={150} />

        <div className="pl-10">
          <div className="text-[68px] font-medium leading-none tracking-[-5px] text-foreground sm:text-[96px]">
            {formatTemperature(weather.main.temp)}
            <span className="text-[50px] align-top sm:text-[70px]">°</span>
            <small className="ml-3 align-top text-2xl tracking-normal sm:text-[25px]">
              C
            </small>
          </div>

          <h2 className="mt-3 text-[17px] first-letter:uppercase font-medium text-foreground">
            {weather.weather[0].description}
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Feels like {formatTemperature(weather.main.feels_like)}°C
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="flex items-center gap-1 rounded-full bg-warning/20 px-2.5 py-1 text-xs text-warning">
              <FiArrowUp className="text-sm" />
              <strong>High {formatTemperature(weather.main.temp_max)}°C</strong>
            </span>

            <span className="flex items-center gap-1 rounded-full bg-primary/30 px-2.5 py-1 text-xs text-primary">
              <FiArrowDown className="text-sm" />
              <strong>Low {formatTemperature(weather.main.temp_min)}°C</strong>
            </span>

            {weather.pop && (
              <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                <strong>{weather.pop}% rain</strong>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2.5 mt-3 flex-wrap">
            <span className="flex items-center gap-1.5 rounded-full bg-muted/50 text-muted-foreground px-2.5 py-1 text-xs">
              <FiSunrise className="text-sm" />
              <strong>Sunrise {formatTime(weather.sys.sunrise)}</strong>
            </span>

            <span className="flex items-center gap-1.5 rounded-full bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">
              <FiSunset className="text-sm" />
              <strong>Sunset {formatTime(weather.sys.sunset)}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;
