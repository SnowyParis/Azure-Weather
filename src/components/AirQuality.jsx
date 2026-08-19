import { FiActivity } from "react-icons/fi";

function AirQuality() {
  const pollutants = [
    ["PM2.5", "28.7 μg/m³"],
    ["PM10", "39.8 μg/m³"],
    ["O₃", "76.3 μg/m³"],
    ["NO₂", "29.5 μg/m³"],
    ["SO₂", "3.8 μg/m³"],
    ["CO", "0.88 mg/m³"],
  ];

  return (
    <section className="glass min-h-[460px] rounded-[2rem] p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-muted-foreground">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">
            <FiActivity />
          </span>

          <span>Air quality</span>
        </div>

        <span className="rounded-full bg-success/15 px-3 py-1 text-xs text-success">
          Moderate
        </span>
      </div>

      <div className="mt-7 flex items-baseline gap-2">
        <strong className="text-5xl font-medium text-foreground">
          56
        </strong>

        <span className="text-xs text-muted-foreground">
          US AQI
        </span>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-[18%] rounded-full bg-warning" />
      </div>

      <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
        <span>Good</span>
        <span>Moderate</span>
        <span>Unhealthy</span>
        <span>Hazardous</span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {pollutants.map(([name, value]) => (
          <div
            key={name}
            className="rounded-2xl bg-secondary p-2.5"
          >
            <span className="block text-[11px] text-muted-foreground">
              {name}
            </span>

            <strong className="mt-1 block text-[13px] font-medium text-foreground">
              {value}
            </strong>
          </div>
        ))}
      </div>

      <p className="mt-20 text-xs leading-relaxed text-muted-foreground">
        Acceptable for most people. Unusually sensitive
        individuals may want to limit long outdoor exertion.
      </p>
    </section>
  );
}

export default AirQuality;