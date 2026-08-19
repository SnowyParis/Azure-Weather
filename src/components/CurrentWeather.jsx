import { FiMapPin, FiArrowUp, FiArrowDown } from "react-icons/fi";
import WeatherIcon from "./WeatherIcon.jsx";

function CurrentWeather() {
  return (
    <section className="glass-strong relative min-h-[380px] mt-6 overflow-hidden rounded-[2.5rem] p-6 sm:p-9">
      <p className="mb-2 text-sm text-muted-foreground">
        Good afternoon — here is your forecast
      </p>

      <div className="flex items-center gap-1.5">
        <FiMapPin className="text-xl text-primary" />

        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Cape Town
        </h1>
      </div>

      <p className="mt-1 text-sm text-muted-foreground">
        Western Cape, South Africa · Friday 14 August · 16:45
      </p>

      <div className="absolute right-6 top-7 rounded-full px-3 py-1 text-xs bg-primary/10 text-primary sm:right-9">
        <strong>Local time 16:45</strong>
      </div>

      <div className="mt-10 flex flex-col items-start gap-5 sm:ml-11 sm:flex-row sm:items-center sm:gap-14">
        <WeatherIcon type="sunny" size={100} />

        <div>
          <div className="text-[68px] font-medium leading-none tracking-[-5px] text-foreground sm:text-[96px]">
            13<span className="text-[50px] align-top sm:text-[70px]">°</span>
            <small className="ml-3 align-top text-2xl tracking-normal sm:text-[25px]">
              C
            </small>
          </div>

          <h2 className="mt-3 text-[17px] font-medium text-foreground">
            Clear sky
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">Feels like 13°C</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="flex items-center gap-1 rounded-full bg-destructive/10 px-2.5 py-1 text-xs text-destructive">
              <FiArrowUp className="text-sm" />
              <strong>High 15°C</strong>
            </span>

            <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">
              <FiArrowDown className="text-sm" />
              <strong>Low 5°C</strong>
            </span>

            <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
              <strong>1% rain</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;
