import {
  FiChevronLeft,
  FiChevronRight,
  FiWind,
  FiDroplet,
} from "react-icons/fi";
import WeatherIcon from "./WeatherIcon.jsx";

const hourlyData = [
  ["Now", "15°", "sunny", "0%", "15.6 km/h"],
  ["17:00", "14°", "sunny", "0%", "13.5 km/h"],
  ["18:00", "13°", "sunny", "5%", "17.9 km/h"],
  ["19:00", "12°", "cloudy", "32%", "12.5 km/h"],
  ["20:00", "11°", "cloudy", "12%", "13.6 km/h"],
  ["21:00", "11°", "moon", "3%", "13.0 km/h"],
  ["22:00", "9°", "moon", "6%", "15.4 km/h"],
  ["23:00", "8°", "moon", "6%", "10.1 km/h"],
  ["00:00", "7°", "moon", "8%", "11.2 km/h"],
];

function HourlyForecast() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Next 24 hours
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            Temperature, rain chance and wind, hour by hour
          </p>
        </div>

        <div className="flex gap-2">
          <button className="glass grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition hover:bg-glass-strong">
            <FiChevronLeft />
          </button>

          <button className="glass grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition hover:bg-glass-strong">
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {hourlyData.map(([time, temperature, weather, rain, wind]) => (
          <div
            key={time}
            className="glass flex min-w-[105px] flex-col items-center gap-3 rounded-3xl px-2.5 py-[18px]"
          >
            <span className="text-xs text-muted-foreground">{time}</span>

            <WeatherIcon type={weather} size={30} />

            <strong className="text-[23px] font-medium text-foreground">
              {temperature}
            </strong>

            <span className="flex items-center gap-1 text-[11px] text-primary">
              <FiDroplet />
              {rain}
            </span>

            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <FiWind />
              {wind}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HourlyForecast;
