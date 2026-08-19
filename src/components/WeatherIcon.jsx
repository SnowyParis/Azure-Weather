import {
  FiSun,
  FiCloud,
  FiCloudRain,
  FiCloudDrizzle,
  FiWind,
  FiMoon,
} from "react-icons/fi";
import { IoIosSnow } from "react-icons/io";
import { IoThunderstormOutline } from "react-icons/io5";
// import { FaWind } from "react-icons/fa";
import { LuCloudFog } from "react-icons/lu";

function WeatherIcon({ type = "sunny", size = 48 }) {
  const icons = {
    sunny: <FiSun size={size} />,
    cloudy: <FiCloud size={size} />,
    rain: <FiCloudRain size={size} />,
    drizzle: <FiCloudDrizzle size={size} />,
    moon: <FiMoon size={size} />,
    thunder: <IoThunderstormOutline size={size} />,
    wind: <FiWind size={size} />,
    snow: <IoIosSnow size={size} />,
    fog: <LuCloudFog size={size} />,
  };

  const colors = {
    sunny: "text-accent",
    cloudy: "text-muted-foreground",
    rain: "text-muted-foreground",
    drizzle: "text-muted-foreground",
    moon: "text-primary",
    thunder: "text-muted-foreground",
    snow: "primary-foreground",
    wind: "primary-foreground",
    fog: "primary-foreground",
  };

  return (
    <div className={colors[type] || colors.sunny}>
      {icons[type] || icons.sunny}
    </div>
  );
}

export default WeatherIcon;
