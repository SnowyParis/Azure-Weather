export const formatTemperature = (temp) => {
  return Math.round(temp);
};

export const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute:"2-digit"
  });
};

export const formatDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    weekday: "short",
    month:"short",
    day: "numeric"
  });
};

export const getWindDirection = (deg) => {
    const directions = [
        "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S",
        "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"
    ];

  return directions[Math.round(deg / 22.5) % 16];
};
