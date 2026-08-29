import { getCityAirQuality } from "../services/weatherApi";
import { useEffect, useState, useCallback } from "react";

export function useAirQuality(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAirQuality = useCallback(async (city, abortSignal) => {
    if (!city?.trim()) return; //no city name is given

    setLoading(true);
    setError("");
    setData(null);

    try {
      const result = await getCityAirQuality(city);

      if (abortSignal && abortSignal.aborted) return; //if abortSignal exists and it is aborted

      setData(result);
    } catch (error) {
      if (abortSignal && abortSignal.aborted) return;

      setError(error.message || "Unable to load air-quality data.");
    } finally {
      if (abortSignal && abortSignal.aborted) return;
      
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    fetchAirQuality,
  };
}
