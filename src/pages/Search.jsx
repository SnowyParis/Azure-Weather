import { searchCities } from "../services/weatherAPI.js";
import { useState, useEffect, useRef } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";

function Search({ searchTerm, setSearchTerm }) {
  // const [query, setQuery] = useState("");
  // const [suggestion, setSuggestions] = useState([]);
  // const [showSuggestion, setShowSuggestions] = useState(false);
  // const [searchLoading, setSearchLoading] = useState(false);

  // const searchRef = useRef();

  // const locations = [
  //   "Cape Town",
  //   "Johannesburg",
  //   "Durban",
  //   "Pretoria",
  // ];

  // const handleSubmit = (e) => {
  //   if (query.trim()) {
  //     onSearch(query.trim());
  //     setQuery("");
  //     setShowSuggestions(false);
  //   }
  // }

  // const handleSuggestionsClick = (city) => {
  //   const cityName = city.name ? `${city.name}` : city.name;
  //   onSearch(cityName);
  //   setQuery("");
  //   setShowSuggestions(false);
  // }

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (searchRef.current && !searchRef.current.contains(event.target)) {
  //       setShowSuggestions(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  // useEffect(() => {
  //   const searchTimeOut = setTimeout(async () => {
  //     if (query.length > 2) {
  //       setSearchLoading(true);

  //       try {
  //         const result = await searchCities(query);
  //         setSuggestions(result);
  //         setShowSuggestions(true);
  //       }
  //       catch (err) {
  //         console.error("Search Failed:", err);
  //       }
  //       finally {
  //         setSearchLoading(false);
  //       }
  //     }
  //     else
  //     {
  //       setSuggestions([]);
  //       setShowSuggestions(false);
  //     }
  //   }, 300);

  //   return () => clearTimeout(searchTimeOut);
  // }, [query]);

  return (
    <div className="relative">
      <button
        type="submit"
        className=" rounded-full px-5 py-2.5 text-sm text-primary-foreground transition hover:opacity-90 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/5 focus:ring-offset-2 focus:ring-offset-background"
      >
        <FiSearch size={25} />
      </button>

      <input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        aria-label="Search locations"
        placeholder="Search for a city..."
        className="glass min-w-0 rounded-full flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground px-3 py-2 text-sm focus:ring-2 focus:ring-primary/5 focus:ring-offset-2 focus:ring-offset-background"
      />      
    </div>
  );
}

export default Search;
