import { NavLink, useLocation } from "react-router-dom";
import { useWeather } from "../hooks/useWeather.js";
import Search from "../pages/Search.jsx";
import { useDebounce } from "react-use";
import { useState, useEffect } from "react";
import {
  FiCloud,
  FiHome,
  FiSearch,
  FiSettings,
  FiSliders,
} from "react-icons/fi";

const nav = [
  { to: "/", label: "Home", Icon: FiHome },
  { to: "/search", label: "Search", Icon: FiSearch },
  { to: "/details", label: "Details", Icon: FiSliders },
  { to: "/settings", label: "Settings", Icon: FiSettings },
];

function Header() {
  const { currentWeather, forecast, loading, error, fetchWeatherByCity } =
    useWeather();
  const { pathname } = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  //Debounce the search term to prevent too many API requests
  //by waiting for 500ms after the user stops typing before making the API request
  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    500,
    [searchTerm],
  );

  useEffect(() => {
    fetchWeatherByCity(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

//   searchButton.addEventListener("click", () => {

//     if (cityInput.value.trim() != '') //check that value entered in input box is not empty
//     {
//         checkWeather(cityInput.value); //sends city name typed into searchBox to checkWeather()
//     }
// })

// cityInput.addEventListener('keydown', (event) => {

//     if (event.key == 'Enter' && cityInput.value.trim() != '') //when the Enter key is pressed
//     {
//         checkWeather(cityInput.value);
//     }
// })

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 z-40 lg:mx-15 px-3 pt-3 sm:px-6 sm:pt-5">
        <nav
          aria-label="Main"
          className="glass mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full px-4 py-2.5 sm:px-5"
        >
          {/* Logo */}
          <NavLink
            to="/"
            className="flex min-w-0 items-center gap-2 font-display text-base font-semibold"
          >
            <FiCloud
              aria-hidden="true"
              className="size-5 shrink-0 text-primary"
            />

            <span className="truncate">Azure Weather</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="flex shrink-0 items-center gap-1">
            {/* start */}
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
             {/* end */}

            <div className="hidden items-center gap-1 md:flex">
              {nav.map(({ to, label, Icon }) => {
                const active =
                  to === "/" ? pathname === "/" : pathname.startsWith(to);

                return (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === "/"}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${active ? "bg-foreground/10 text-foreground" : "text-muted-foreground"} hover:bg-foreground/8`}
                  >
                    <Icon aria-hidden="true" className="size-4" />
                    {label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Floating Navigation (hidden for bigger screens)*/}
      <nav
        aria-label="Mobile"
        className="glass fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 gap-1 rounded-3xl p-1.5 md:hidden"
      >
        {nav.map(({ to, label, Icon }) => {
          const active =
            to === "/" ? pathname === "/" : pathname.startsWith(to);

          return (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={`flex flex-col items-center gap-1 rounded-2xl py-2 text-[0.7rem] font-medium transition-colors ${active ? "bg-foreground/10 text-foreground" : "text-muted-foreground"}`}
            >
              <Icon aria-hidden="true" className="size-5" />
              {label}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}

export default Header;
