import { getWindDirection,
  getHumidityDescription,
  getVisibilityDescription,
  getPressureDescription 
} from "../utils/weatherutils.js";
import { getAqiCategory } from "../utils/airQuality";
import HighlightCard from "./HighlightCard.jsx";
import {
  FiDroplet,
  FiWind,
  FiCompass,
  FiActivity,
  FiEye,
  FiSun,
  FiCloud,
  FiThermometer,
  FiUmbrella,
} from "react-icons/fi";

const icons = [
  FiDroplet,
  FiWind,
  FiCompass,
  FiActivity,
  FiEye,
  FiSun,
  FiCloud,
  FiActivity,
  FiThermometer,
  FiUmbrella,
];

function Highlights({ weather, airQuality, loading }) {
  const aqi = airQuality ? Number(airQuality.main.aqi) : null;

  const aqiCategory = aqi ? getAqiCategory(aqi) : null;

  const WeatherStats = [
    {
      icon: <FiDroplet />,
      iconColor: "bg-primary/10 text-primary",
      title: "Humidity",
      value: `${weather.main.humidity}%`,
      description: `${getHumidityDescription(weather.main.humidity)}`,
    },
    {
      icon: <FiWind />,
      iconColor: "bg-secondary text-muted-foreground",
      title: "Wind speed",
      value: `${weather.wind.speed.toFixed(1)} km/h`,
      description: `${weather.wind.gust ? "Gusts " + weather.wind.gust.toFixed(1) + " km/h" : "No gusts"}`,
    },
    {
      icon: <FiCompass />,
      iconColor: "bg-destructive/10 text-destructive",
      title: "Wind direction",
      value: `${getWindDirection(weather.wind.deg)}`,
      description: `${weather.wind.deg}° meteorological`,
    },
    {
      icon: <FiActivity />,
      iconColor: "bg-success/10 text-success",
      title: "Pressure",
      value: `${weather.main.pressure} hPa`,
      description: `${getPressureDescription(weather.main.pressure)}`,
    },
    {
      icon: <FiEye />,
      iconColor: "bg-primary/10 text-primary",
      title: "Visibility",
      value: `${(weather.visibility / 1000).toFixed(1)} km`,
      description: `${getVisibilityDescription(weather.visibility)}`,
    },
    // {
    //   icon: <FiSun />,
    //   iconColor: "bg-destructive/10 text-destructive",
    //   title: "UV index",
    //   value: `${weather.main.uvi}`,
    //   description: "",
    // },
    // {
    //   icon: <FiCloud />,
    //   iconColor: "bg-primary/10 text-primary",
    //   title: "Cloud cover",
    //   value: `${weather.clouds}%`,
    //   description: "",
    // },
    // {
    //   icon: <FiActivity />,
    //   iconColor: "bg-secondary text-muted-foreground",
    //   title: "Air quality",
    //   value: `${loading ? "..." : aqi ? `${aqi} AQI` : "—"}`,
    //   description: `${aqiCategory?.label ?? "Loading..."}`,
    // },
    // {
    //   icon: <FiThermometer />,
    //   iconColor: "bg-secondary text-muted-foreground",
    //   title: "Dew point",
    //   value: `${weather.dew_point} °C`,
    //   description: "",
    // },
    // {
    //   icon: <FiUmbrella />,
    //   iconColor: "bg-primary/10 text-primary",
    //   title: "Rain probability",
    //   value: `${Math.round(weather.rain * 100)}%`,
    //   description: "",
    // },
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {WeatherStats.map(({ icon, iconColor, title, value, description }) => (
          <HighlightCard
            key={title}
            icon={icon}
            iconColor={iconColor}
            title={title}
            value={value}
            // progress={weather.main.humidity}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}

export default Highlights;
