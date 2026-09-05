import { formatTemperature } from "../utils/weatherutils.js";
import WeatherIcon from "./WeatherIcon.jsx";

function SevenDayForecast({ forecast }) {
  const dailyForecast = forecast.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toDateString();

    if (!acc[date]) //if acc[date] has no value
    {
      acc[date] = item;
    }

    return acc;
  }, {});

  const dailyItems = Object.values(dailyForecast).slice(0, 7);

  return (
    <section className="pb-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-foreground">
          7-day forecast
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          A plan for each day
        </p>
      </div>

      <div className="glass overflow-hidden rounded-4xl px-2">
        {dailyItems.map((item, index) => (
          <div
            key={index}
            className="grid min-h-14 grid-cols-[55px_35px_1fr_100px] items-center gap-2 border-b border-border px-4 py-2 last:border-0 sm:grid-cols-[75px_40px_1fr_180px]"
          >
            <strong className="text-sm text-foreground">
              {index === 0
                ? "Today"
                : new Date(item.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
            </strong>

            <WeatherIcon type={item.weather[0].main} size={24} />

            <span className=" sm:ml-8 ml:0 first-letter:uppercase text-sm text-muted-foreground ">
              <span>{item.weather[0].description}</span>
              <span className="max-sm:hidden"><strong> • </strong> Wind {item.wind.speed.toFixed(1)} km/h <strong> • </strong></span>
              <span className="max-sm:hidden">Humidity {item.main.humidity}%</span>
            </span>

            <div className="flex items-center justify-end gap-1.5 text-sm text-muted-foreground">
              <span>{formatTemperature(item.main.temp_min)}°</span>

              <div className="h-1.5 w-6 overflow-hidden rounded-full bg-muted sm:w-12">
                <div className="h-full w-full rounded-full bg-linear-to-r from-primary to-accent" />
              </div>

              <strong className="text-xs text-foreground">
                {formatTemperature(item.main.temp_max)}°
              </strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SevenDayForecast;
