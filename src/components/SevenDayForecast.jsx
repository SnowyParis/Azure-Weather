import { FiChevronDown } from "react-icons/fi";
import WeatherIcon from "./WeatherIcon.jsx";

const days = [
  ["Today", "Clear sky", "sunny", "6°", "14°"],
  ["Sat", "Rain showers", "rain", "5°", "13°"],
  ["Sun", "Foggy", "cloudy", "5°", "14°"],
  ["Mon", "Light drizzle", "drizzle", "5°", "14°"],
  ["Tue", "Rain showers", "rain", "5°", "14°"],
  ["Wed", "Rain showers", "rain", "5°", "14°"],
  ["Thu", "Partly cloudy", "cloudy", "8°", "17°"],
];

function SevenDayForecast() {
  return (
    <section className="pb-5">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-foreground">
          7-day forecast
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Tap a day for the full breakdown
        </p>
      </div>

      <div className="glass overflow-hidden rounded-[2rem] px-2">
        {days.map(([day, weather, icon, low, high]) => (
          <div
            key={day}
            className="grid min-h-14 grid-cols-[55px_35px_1fr_80px_18px] items-center gap-2 border-b border-border px-2 py-2 last:border-0 sm:grid-cols-[75px_40px_1fr_180px_25px]"
          >
            <strong className="text-sm text-foreground">{day}</strong>

            <WeatherIcon type={icon} size={24} />

            <span className="hidden text-xs text-muted-foreground sm:block">
              {weather}
            </span>

            <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
              <span>{low}</span>

              <div className="h-1.5 w-6 overflow-hidden rounded-full bg-muted sm:w-12">
                <div className="h-full w-[70%] rounded-full bg-linear-to-r from-primary to-accent" />
              </div>

              <strong className="text-foreground">{high}</strong>
            </div>

            <button className="text-muted-foreground">
              <FiChevronDown />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SevenDayForecast;
