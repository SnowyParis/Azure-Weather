import { useEffect, useState, useCallback } from "react";
import { getCityAirQuality } from "../services/weatherApi";

export function useAirQuality(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAirQuality = useCallback(async (city) => {
    setLoading(true);
    setError("");

    try {
      const result = await getCityAirQuality(city);

      if (!cancelled) {
        setData(result);
      }
    } catch (err) {
      if (!cancelled) {
        setError(err.message || "Unable to load air-quality data.");
      }
    } finally {
      if (!cancelled) {
        setLoading(false);
      }
    }
  }, []);

  return {
    data,
    loading,
    error,
    fetchAirQuality,
  };
}
