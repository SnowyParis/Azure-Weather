import { useWeather } from "./hooks/useWeather.js";
import { Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings.jsx";
import { FiArrowUp } from "react-icons/fi";
import Details from "./pages/Details.jsx";
import Search from "./pages/Search.jsx";
import Home from "./pages/Home.jsx";
import {
  getCurrentWeather,
  getWeatherForecast,
  getCityAirQuality,
} from "./services/weatherAPI.js";
// import "./App.css";

function App() {
  console.log(getCurrentWeather("Cape Town"));
  // console.log(getCityAirQuality("Cape Town"));
  // console.log(getWeatherForecast("Cape Town"));

  // const { currentWeather, forecast, loading, error, fetchWeatherByCity } =
  //   useWeather();

  return (
    <div className="min-h-screen pb-20">
      {/* <Header /> */}
      <main className="mx-auto w-[calc(100%-24px)] max-w-5xl">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/search"  element={<Search />} /> */}
          <Route path="/details" element={<Details />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>

      <button
        className="glass fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full text-xl text-foreground transition hover:bg-glass-strong"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FiArrowUp aria-hidden="true" className="size-5" />
      </button>
    </div>
  );
}

export default App;
