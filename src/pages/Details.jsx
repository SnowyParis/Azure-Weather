import {
  FiThermometer,
  FiWind,
  FiDroplet,
  FiCloud,
  FiSun,
} from "react-icons/fi";

function Details() {
  const details = [
    {
      icon: FiThermometer,
      label: "Temperature",
      value: "13°C",
      description: "Feels like 13°C",
    },
    {
      icon: FiWind,
      label: "Wind",
      value: "14.4 km/h",
      description: "SE · 130°",
    },
    {
      icon: FiDroplet,
      label: "Humidity",
      value: "65%",
      description: "Humid",
    },
    {
      icon: FiCloud,
      label: "Cloud cover",
      value: "9%",
      description: "Mostly clear",
    },
    {
      icon: FiSun,
      label: "UV index",
      value: "8",
      description: "Very high",
    },
  ];

  return (
    <section className="py-12">
      <div className="mb-6">
        <span className="text-xs text-muted-foreground">
          Weather information
        </span>

        <h1 className="mt-1 text-3xl font-semibold text-foreground sm:text-4xl">
          Detailed forecast
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Explore the measurements behind today's forecast.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {details.map(
          ({ icon: Icon, label, value, description }) => (
            <div
              key={label}
              className="glass flex min-h-44 flex-col items-start rounded-3xl p-6"
            >
              <Icon className="text-2xl text-primary" />

              <span className="mt-5 text-xs text-muted-foreground">
                {label}
              </span>

              <strong className="mt-1 text-[28px] font-medium text-foreground">
                {value}
              </strong>

              <small className="mt-1 text-muted-foreground">
                {description}
              </small>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Details;