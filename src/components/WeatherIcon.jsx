import { IoThunderstormOutline } from "react-icons/io5";
import { LuCloudFog } from "react-icons/lu";
import { IoIosSnow } from "react-icons/io";
import {
  FiSun,
  FiCloud,
  FiCloudRain,
  FiCloudDrizzle,
  FiWind,
  FiMoon,
} from "react-icons/fi";

function WeatherIcon({ type = "Clear", size = 48 }) {
  const icons = {
    Clear: <FiSun size={size} />,
    Clouds: <FiCloud size={size} />,
    Rain: <FiCloudRain size={size} />,
    Drizzle: <FiCloudDrizzle size={size} />,
    moon: <FiMoon size={size} />,
    Thunderstorm: <IoThunderstormOutline size={size} />,
    wind: <FiWind size={size} />,
    Snow: <IoIosSnow size={size} />,
    Fog: <LuCloudFog size={size} />,
  };

  const colors = {
    Clear: "text-accent",
    Clouds: "text-muted-foreground",
    Rain: "text-muted-foreground",
    Drizzle: "text-muted-foreground",
    moon: "text-primary",
    Thunderstorm: "text-muted-foreground",
    Snow: "primary-foreground",
    wind: "primary-foreground",
    Fog: "primary-foreground",
  };

  return (
    <div className={colors[type] || colors.Clear}>
      {icons[type] || icons.Clear}
    </div>
  );
}

export default WeatherIcon;
