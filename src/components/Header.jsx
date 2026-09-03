import { NavLink, useLocation } from "react-router-dom";
import { useWeather } from "../hooks/useWeather.js";
import { useState } from "react";
import {
  FiCloud,
  FiHome,
  FiSearch,
  FiSettings,
  FiSliders,
  FiRefreshCw,
} from "react-icons/fi";

const nav = [
  { to: "/", label: "Home", Icon: FiHome },
  { to: "/details", label: "Details", Icon: FiSliders },
  { to: "/settings", label: "Settings", Icon: FiSettings },
];

function Header({ onSearch, onRefresh, currentCity }) {
  const { pathname } = useLocation();
  const [city, setCity] = useState(
    currentCity || ""
  );

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedCity = city.trim();

    if (!trimmedCity) {
      return;
    }

    onSearch(trimmedCity);
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 z-40 lg:mx-auto px-3 pt-3 sm:px-4 sm:pt-5">
        <nav
          aria-label="Main"
          className="glass mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full pl-4 pr-1 py-2.5 sm:px-5"
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

            {/* Search */}
            <form onSubmit={handleSubmit} className="mx-auto flex w-55 max-[470px]:w-45 max-w-xl">
              <div className="relative w-50 max-[470px]:w-40">
                <input
                  type="search"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  placeholder="Search for a city..."
                  aria-label="Search for a city"
                  className="max-[470px]:w-30 h-9 w-40 rounded-full border border-border bg-card pl-3 pr-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                <button
                  type="submit"
                  disabled={!city.trim()} //if there is no value
                  className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-primary/35 px-2 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="hidden sm:inline text-muted-foreground"><FiSearch size={18} /></span>

                  <FiSearch className="sm:hidden text-muted-foreground size-4" />
                </button>
              </div>
            </form>

            {/* Refresh */}
            <button
              type="button"
              onClick={onRefresh}
              disabled={!onRefresh}
              aria-label="Refresh weather"
              className="max-[520px]:hidden grid mr-3 h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:bg-secondary hover:text-foreground disabled:opacity-50"
            >
              <FiRefreshCw />
            </button>

            {/* max-[600px]: md:flex */}
            <div className="hidden items-center gap-1 min-[880px]:flex">
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
        className="glass fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 gap-1 rounded-3xl p-1.5 min-[880px]:hidden"
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

        {/* Refresh */}
        <div className="flex flex-col min-[520px]:hidden items-center gap-1">
          <button
            type="button"
            onClick={onRefresh}
            disabled={!onRefresh}
            aria-label="Refresh weather"
            className="grid mr-2 h-7 w-7 shrink-0 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground disabled:opacity-50"
          >
            <FiRefreshCw />
          </button>

          <span className="text-[0.7rem] font-medium text-muted-foreground">Refresh</span>
        </div>
      </nav>
    </>
  );
}

export default Header;
