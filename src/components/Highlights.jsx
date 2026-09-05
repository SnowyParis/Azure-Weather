import HighlightCard from "./HighlightCard.jsx";
import {
  getWindDirection,
  getHumidityDescription,
  getVisibilityDescription,
  getPressureDescription
} from "../utils/weatherutils.js";
import {
  FiDroplet,
  FiWind,
  FiCompass,
  FiActivity,
  FiEye,
} from "react-icons/fi";

function Highlights({ weather }) {
  const WeatherStats = [
    {
      icon: <FiDroplet />,
      iconColor: "bg-primary/30 text-primary",
      title: "Humidity",
      value: `${weather.main.humidity}%`,
      description: `${getHumidityDescription(weather.main.humidity)}`,
    },
    {
      icon: <FiWind />,
      iconColor: "bg-secondary/30 text-muted-foreground",
      title: "Wind speed",
      value: `${weather.wind.speed.toFixed(1)} km/h`,
      description: `${weather.wind.gust ? "Gusts " + weather.wind.gust.toFixed(1) + " km/h" : "No gusts"}`,
    },
    {
      icon: <FiCompass />,
      iconColor: "bg-warning/30 text-warning",
      title: "Wind direction",
      value: `${getWindDirection(weather.wind.deg)}`,
      description: `${weather.wind.deg}° meteorological`,
    },
    {
      icon: <FiActivity />,
      iconColor: "bg-success/30 text-success",
      title: "Pressure",
      value: `${weather.main.pressure} hPa`,
      description: `${getPressureDescription(weather.main.pressure)}`,
    },
    {
      icon: <FiEye />,
      iconColor: "bg-primary/30 text-primary",
      title: "Visibility",
      value: `${(weather.visibility / 1000).toFixed(1)} km`,
      description: `${getVisibilityDescription(weather.visibility)}`,
    },
  ];

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-foreground">
          Today's highlights
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Every measurement that shapes how the day feels
        </p>
      </div>

      <div className="grid max-[450px]:grid-cols-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {WeatherStats.map(({ icon, iconColor, title, value, description }) => (
          <HighlightCard
            key={title}
            icon={icon}
            iconColor={iconColor}
            title={title}
            value={value}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}

export default Highlights;
