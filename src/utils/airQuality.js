export function getAqiCategory(aqi) {
  const categories = {
    1: {
      label: "Good",
      description: "Air quality is considered good.",
      progress: 20,
    },

    2: {
      label: "Fair",
      description: "Air quality is generally acceptable.",
      progress: 40,
    },

    3: {
      label: "Moderate",
      description:
        "Air quality is acceptable but may affect sensitive individuals.",
      progress: 60,
    },

    4: {
      label: "Poor",
      description: "Air quality may have health effects.",
      progress: 80,
    },

    5: {
      label: "Very Poor",
      description: "Air quality may pose significant health concerns.",
      progress: 100,
    },
  };

  return categories[aqi] || categories[1];
}

export function formatPollutant(value) {
  if (value === undefined || value === null) {
    return "—";
  }

  return `${Number(value).toFixed(1)} μg/m³`;
}
