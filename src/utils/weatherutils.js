export const formatTemperature = (temp) => {
  return Math.round(temp);
};

export const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString("en-GB", {
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
    case (pressure === 1013):
      return "Standard Pressure";
    case (pressure < 1000 ):
      return "Low Pressure";
    case (pressure >= 1000 && pressure < 1010):
      return "Low Pressure Starting";
    case (pressure >= 1010 && pressure < 1020):
      return "Normal Pressure";
    case (pressure >= 1020): 
      return "Strong High Pressure";
    default:
      return "";
  }
}

export const TimeGreeting = (localTime) => {
  const currentHour = new Date(localTime).getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return 'morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'afternoon';
  } else {
    return 'evening';
  }

  return "day";
}