import CurrentWeather from "../components/CurrentWeather";
import HourlyForecast from "../components/HourlyForecast";
import Highlights from "../components/Highlights";
import AirQuality from "../components/AirQuality";
import SunriseSunset from "../components/SunriseSunset";
import SevenDayForecast from "../components/SevenDayForecast";
import { useWeather } from "../hooks/useWeather.js";

function Home() {
  // const {currentWeather, forecast, loading, error, fetchWeatherByCity} = useWeather();

  return (
    <div className="flex flex-col gap-9">
      <CurrentWeather />

      <HourlyForecast />

      <Highlights />

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <AirQuality />
        <SunriseSunset />
      </section>

      <SevenDayForecast />
    </div>
  );
}

export default Home;