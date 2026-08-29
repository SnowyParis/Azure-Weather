import CurrentWeather from "../components/CurrentWeather";
// import HourlyForecast from "../components/HourlyForecast";
import Highlights from "../components/Highlights";
import AirQuality from "../components/AirQuality";
import SevenDayForecast from "../components/SevenDayForecast";
import { useAirQuality } from "../hooks/useAirQuality";
import { useWeather } from "../hooks/useWeather.js";
import { useEffect } from "react";

function Home() {
  const {
    data: airQuality,
    loading: airQualityLoading,
    error: airQualityError,
    fetchAirQuality,
  } = useAirQuality("Cape Town");

  const { currentWeather, forecast, loading, error, fetchWeatherByCity } =
    useWeather();

  useEffect(() => {
    // Create a local cancellation controller for this cycle
    let isCurrentRequest = true;

    // Create a dummy abort object to match our hook configuration
    const signal = {
      get aborted() {
        return !isCurrentRequest;
      },
    };

    fetchAirQuality("Cape Town", signal);

    // Cleanup function runs if city changes or component unmounts
    return () => {
      isCurrentRequest = false;
    };
  }, ["Cape Town", fetchAirQuality]);

  // if (airQualityLoading) return <p>Loading data...</p>;
  // if (airQualityError) return <p style={{ color: "red" }}>{airQualityError}</p>;
  // if (!airQuality) return <p>No data requested yet.</p>;

  return (
    <div className="flex flex-col gap-9">
      {currentWeather && airQuality && !loading && (
        <CurrentWeather weather={currentWeather} aqi={airQuality} />
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
      </section>

      {forecast && <SevenDayForecast forecast={forecast} />}
    </div>
  );
}

export default Home;
