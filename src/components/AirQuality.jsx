import { FiActivity } from "react-icons/fi";
import { getAqiCategory, formatPollutant } from "../utils/airQuality";

function AirQuality({ data, loading, error }) {
  if (loading) {
    return (
      <section className="glass min-h-[460px] rounded-[2rem] p-6">
        <Header />

        <div className="mt-12 flex items-center justify-center">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
            Loading air-quality data...
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="glass min-h-[460px] rounded-[2rem] p-6">
        <Header />

        <div className="mt-10 rounded-2xl bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      </section>
    );
  }

  if (!data) {
    return null;
  }

  const aqi = Number(data.main.aqi);
  const category = getAqiCategory(aqi);

  const pollutants = [
    ["PM2.5", data.components.pm2_5],
    ["PM10", data.components.pm10],
    ["O₃", data.components.o3],
    ["NO₂", data.components.no2],
    ["SO₂", data.components.so2],
    ["CO", data.components.co],
  ];

  return (
    <section className="glass min-h-[460px] rounded-[2rem] p-6">
      <Header />

      {/* AQI */}
      <div className="mt-7 flex items-baseline gap-2">
        <strong className="text-5xl font-medium text-foreground">{aqi}</strong>

        <span className="text-sm text-muted-foreground">OpenWeather AQI</span>
      </div>

      {/* AQI progress */}
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{
            width: `${category.progress}%`,
          }}
        />
      </div>

      {/* AQI scale */}
      <div className="mt-2 flex justify-between font-medium text-[13px] text-muted-foreground">
        <span>Good</span>
        <span>Fair</span>
        <span>Moderate</span>
        <span>Poor</span>
        <span>Very poor</span>
      </div>

      {/* Pollutants */}
      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {pollutants.map(([name, value]) => (
          <div key={name} className="rounded-3xl bg-foreground/11 px-3 py-2">
            <span className="block text-[0.68rem] text-muted-foreground">
              {name}
            </span>

            <strong className="mt-1 block text-sm font-semibold text-foreground">
              {formatPollutant(value)}
            </strong>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
        {category.description}
      </p>

      {/* Location */}
      <p className="mt-3 text-sm text-muted-foreground">
        Data for{" "}
        <span className="font-medium text-foreground">
          {data.location.name}
        </span>
      </p>
    </section>
  );
}

function Header() {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5 text-muted-foreground">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/30 text-primary">
          <FiActivity />
        </span>

        <span>Air quality</span>
      </div>

      <span className="rounded-full bg-primary/30 px-3 py-1 text-xs text-primary">
        Live
      </span>
    </div>
  );
}

export default AirQuality;
