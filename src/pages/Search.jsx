import { useState } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";

function Search({onSearch, loading}) {
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestions] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const locations = [
    "Cape Town",
    "Johannesburg",
    "Durban",
    "Pretoria",
  ];

  const handleSubmit = (e) => {
    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
      setShowSuggestions(false);
    }
  }

  const handleSuggestionsClick = (city) => {
    const cityName = city.name ? `${city.name}` : city.name;
    onSearch(cityName);
    setQuery("");
    setShowSuggestions(false);
  }

  return (
    <section className="py-12">
      <div className="mb-6">
        <span className="text-xs text-muted-foreground">
          Find a location
        </span>

        <h1 className="mt-1 text-3xl font-semibold text-foreground sm:text-4xl">
          Search weather
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Search for a city to view its current weather.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="glass flex items-center gap-3 rounded-full p-2.5 pl-5">
          
            <FiSearch className="text-primary" />

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for a city..."
              className="min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
              disabled={loading}
            />

            <button type="submit" className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition hover:opacity-90">
              Search
            </button>
          
        </div>
    </form>
      <div className="mt-9">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Popular locations
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((city) => (
            <button
              key={city}
              className="glass flex min-h-28 flex-col items-start justify-center gap-2.5 rounded-3xl p-5 text-foreground transition hover:-translate-y-1"
            >
              <FiMapPin className="text-xl text-primary" />

              <span>{city}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Search;
