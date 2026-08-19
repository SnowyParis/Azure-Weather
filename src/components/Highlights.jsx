import {
  FiDroplet,
  FiWind,
  FiCompass,
  FiActivity,
  FiEye,
  FiSun,
  FiCloud,
  FiThermometer,
  FiUmbrella,
} from "react-icons/fi";

import HighlightCard from "./HighlightCard.jsx";

const icons = [
  FiDroplet,
  FiWind,
  FiCompass,
  FiActivity,
  FiEye,
  FiSun,
  FiCloud,
  FiActivity,
  FiThermometer,
  FiUmbrella,
];

function Highlights() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-foreground">
          Today's highlights
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Every measurement that shapes how the day feels
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <HighlightCard
          icon={<FiDroplet />}
          iconColor="bg-primary/10 text-primary"
          title="Humidity"
          value="65%"
          progress={65}
          description="Humid"
        />

        <HighlightCard
          icon={<FiWind />}
          iconColor="bg-secondary text-muted-foreground"
          title="Wind speed"
          value="14.4 km/h"
          progress={48}
          description="Gusts 22.4 km/h"
        />

        <HighlightCard
          icon={<FiCompass />}
          iconColor="bg-primary/10 text-primary"
          title="Wind direction"
          value="SE"
          description="130° meteorological"
        >
          <div className="relative mt-1 h-[52px] w-[52px] rounded-full border border-border">
            <span className="absolute left-1/2 top-1/2 h-0.5 w-6 origin-left -translate-y-1/2 rotate-45 bg-primary" />
          </div>
        </HighlightCard>

        <HighlightCard
          icon={<FiActivity />}
          iconColor="bg-success/10 text-success"
          title="Pressure"
          value="1012 hPa"
          progress={58}
          description="Normal"
        />

        <HighlightCard
          icon={<FiEye />}
          iconColor="bg-primary/10 text-primary"
          title="Visibility"
          value="14.2 km"
          progress={76}
          description="Excellent"
        />

        <HighlightCard
          icon={<FiSun />}
          iconColor="bg-destructive/10 text-destructive"
          title="UV index"
          value="8"
          progress={80}
          description="Very high"
        />

        <HighlightCard
          icon={<FiCloud />}
          iconColor="bg-primary/10 text-primary"
          title="Cloud cover"
          value="9%"
          progress={9}
          description="Mostly clear"
        />

        <HighlightCard
          icon={<FiActivity />}
          iconColor="bg-secondary text-muted-foreground"
          title="Air quality"
          value="56 AQI"
          progress={20}
          description="Moderate"
        />

        <HighlightCard
          icon={<FiThermometer />}
          iconColor="bg-secondary text-muted-foreground"
          title="Dew point"
          value="6°C"
          description="Comfortable air"
        />

        <HighlightCard
          icon={<FiUmbrella />}
          iconColor="bg-primary/10 text-primary"
          title="Rain probability"
          value="1%"
          progress={1}
          description="0 mm expected"
        />
      </div>
    </section>
  );
}

export default Highlights;
