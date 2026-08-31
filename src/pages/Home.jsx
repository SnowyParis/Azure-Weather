import SevenDayForecast from "../components/SevenDayForecast";
import CurrentWeather from "../components/CurrentWeather";
import { useAirQuality } from "../hooks/useAirQuality";
import { useWeather } from "../hooks/useWeather.js";
import { useSearchParams } from "react-router-dom";
import Highlights from "../components/Highlights";
import AirQuality from "../components/AirQuality";
import Header from "../components/Header.jsx";
import { useState, useEffect } from "react";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get("city") || "Cape Town";

  const {
    data: airQuality,
    loading: airQualityLoading,
    error: airQualityError,
    fetchAirQuality,
  } = useAirQuality(city);

  const { currentWeather, forecast, loading, error, fetchWeatherByCity } =
    useWeather(city);

  function handleSearch(newCity) {
    const trimmedCity = newCity.trim();

    if (!trimmedCity) {
      return;
    }

    setSearchParams({
      city: trimmedCity,
    });
  }

  function handleRefresh() {
    fetchWeatherByCity(city);
  }

  useEffect(() => {
    // Create a local cancellation controller for this cycle
    let isCurrentRequest = true;

    // Create a dummy abort object to match our hook configuration
    const signal = {
      get aborted() {
        return !isCurrentRequest;
      },
    };

    fetchAirQuality(city, signal);

    // Cleanup function runs if city changes or component unmounts
    return () => {
      isCurrentRequest = false;
    };
  }, [city, fetchAirQuality]);

  return (
    <div>
      <Header
        onSearch={handleSearch}
        onRefresh={handleRefresh}
        currentCity={city}
      />

      <main className="mx-0 px-4 py-4 sm:px-6 lg:px-8">
        {error && !currentWeather ? (
          <div className="glass rounded-[2rem] p-8 text-center">
            <h2 className="text-xl font-semibold">Unable to load weather</h2>

            <p className="mt-2 text-sm text-muted-foreground">{error}</p>

            <button
              type="button"
              onClick={handleRefresh}
              className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Try again
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-9">
            {currentWeather && airQuality && !loading && (
              <CurrentWeather weather={currentWeather} aqi={airQuality} />
            )}

            {currentWeather && !loading && (
              <Highlights
                weather={currentWeather}
                airQuality={airQuality}
                loading={airQualityLoading}
              />
            )}

            {airQuality && !airQualityLoading && (
              <AirQuality
                data={airQuality}
                loading={airQualityLoading}
                error={airQualityError}
              />
            )}

            {forecast && <SevenDayForecast forecast={forecast} />}
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
