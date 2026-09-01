export const formatTemperature = (temp) => {
  return Math.round(temp);
};

export const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

export const getWindDirection = (deg) => {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];

  return directions[Math.round(deg / 22.5) % 16];
};

export const getHumidityDescription = (humidity) => {
  switch (true) {
    case (humidity < 30):
      return "Low Humidity";
    case (humidity >= 30 && humidity < 60):
      return "Normal Humidity";
    case (humidity >= 60):
      return "High Humidity";
    case (humidity === 100):
      return "Saturated Air";
    default:
      return "";
  }
}

export const getVisibilityDescription = (visibility) => {
  switch (true) {
    case (visibility < 1000):
      return "Very Poor";
    case (visibility >= 1000 && visibility < 4000): 
      return "Poor";
    case (visibility >= 4000 && visibility < 10000):
      return "Moderate";
    case (visibility >= 10000):
      return "Good/Clear";
    default:
      return "";
  }
}

export const getPressureDescription = (pressure) => {
  switch (true) {
    case (pressure === 1013.25):
      return "Standard Pressure";
    case (pressure >= 1020): 
      return "High Pressure";
    case (pressure <= 1000 ):
      return "Low Pressure";
    default:
      return "";
  }
}