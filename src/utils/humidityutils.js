export function getHumidityCategory(humidity) {
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