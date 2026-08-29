import WeatherIcon from "./WeatherIcon.jsx";
import {
  formatTemperature,
  formatTime,
  formatDate,
} from "../utils/weatherutils.js";
import {
  FiMapPin,
  FiArrowUp,
  FiArrowDown,
  FiSunrise,
  FiSunset,
} from "react-icons/fi";

function CurrentWeather({ weather, aqi }) {
  return (
    <section className="glass-strong relative min-h-[380px] mt-6 overflow-hidden rounded-[2.5rem] p-6 sm:p-9">
      <p className="mb-2 text-sm text-muted-foreground">
        Good afternoon — here is your forecast
      </p>

      <div className="flex items-center gap-1.5">
        <FiMapPin className="text-xl text-primary" />

        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          {weather.name}
        </h1>
      </div>

      <p className="mt-1 text-sm text-muted-foreground">
        {aqi.location.state}, {weather.sys.country} ·{" "}
        {new Date(weather.dt * 1000).toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
        })}{" "}
        ·{" "}
        {new Date(weather.dt * 1000).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>

      <div className="absolute right-6 top-7 rounded-full px-3 py-1 text-xs bg-primary/10 text-primary sm:right-9">
        <strong>
          Local time{" "}
          {new Date(weather.dt * 1000).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </strong>
      </div>

      <div className="mt-10 flex flex-col items-start gap-5 sm:ml-11 sm:flex-row sm:items-center sm:gap-14">
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
            <span className="flex items-center gap-1 rounded-full bg-destructive/10 px-2.5 py-1 text-xs text-destructive">
              <FiArrowUp className="text-sm" />
              <strong>High {formatTemperature(weather.main.temp_max)}°C</strong>
            </span>

            <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">
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
            <span className="flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              <FiSunrise className="text-sm" />
              <strong>Sunrise {formatTime(weather.sys.sunrise)}</strong>
            </span>

            <span className="flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              <FiSunset className="text-sm" />
              <strong>Sunset {formatTime(weather.sys.sunset)}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* <div className="rounded-2xl bg-secondary p-3">
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <FiSunrise />
          Sunrise
        </span>

        <strong className="mt-1 block text-xl font-medium text-foreground">
          {formatTime(weather.sys.sunrise)}
        </strong>
      </div> */}
    </section>
  );
}

export default CurrentWeather;
