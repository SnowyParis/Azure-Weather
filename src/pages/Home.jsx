import CurrentWeather from "../components/CurrentWeather";
// import HourlyForecast from "../components/HourlyForecast";
import Highlights from "../components/Highlights";
import AirQuality from "../components/AirQuality";
// import SunriseSunset from "../components/SunriseSunset";
import SevenDayForecast from "../components/SevenDayForecast";
import { useAirQuality } from "../hooks/useAirQuality";
import { useWeather } from "../hooks/useWeather.js";

function Home() {
  const {
    data: airQuality,
    loading: airQualityLoading,
    error: airQualityError,
    fetchAirQuality,
  } = useAirQuality("Cape Town");

  const { currentWeather, forecast, loading, error, fetchWeatherByCity } =
    useWeather();

  return (
    <div className="flex flex-col gap-9">
      {currentWeather && !loading && (
        <CurrentWeather weather={currentWeather} />
      )}

      {/* <HourlyForecast /> */}

      {currentWeather && !loading && (
        <Highlights
          weather={currentWeather}
          airQuality={airQuality}
          loading={airQualityLoading}
        />
      )}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {airQuality && !airQualityLoading && (
          <AirQuality
            data={airQuality}
            loading={airQualityLoading}
            error={airQualityError}
          />
        )}

        {/* {currentWeather && !loading && (
          <SunriseSunset weather={currentWeather} />
        )} */}
      </section>

      {forecast && <SevenDayForecast forecast={forecast} />}
    </div>
  );
}

export default Home;
