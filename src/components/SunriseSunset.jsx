import { FiSunrise, FiSunset } from "react-icons/fi";

function SunriseSunset() {
  return (
    <section className="glass min-h-[460px] rounded-[2rem] p-6">
      <h2 className="text-[17px] font-medium text-foreground">
        Sunrise & sunset
      </h2>

      <div className="relative mt-3 h-[190px] overflow-hidden">
        <div className="absolute left-[10%] top-11 h-[145px] w-[80%] rounded-t-full border-[6px] border-b-0 border-dashed border-primary/25" />

        <div className="absolute bottom-5 left-[4%] right-[4%] h-[3px] bg-primary/30" />

        <div className="absolute right-[8%] top-16 h-[38px] w-[38px] rounded-full bg-accent shadow-[0_0_0_12px_oklch(0.869_0.128_87.1/14%)]" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-secondary p-3">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <FiSunrise />
            Sunrise
          </span>

          <strong className="mt-1 block text-xl font-medium text-foreground">
            05:05
          </strong>
        </div>

        <div className="rounded-2xl bg-secondary p-3">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <FiSunset />
            Sunset
          </span>

          <strong className="mt-1 block text-xl font-medium text-foreground">
            18:54
          </strong>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-xs">
        <div className="flex justify-between text-muted-foreground">
          <span>Day length</span>
          <strong className="text-foreground">13h 48m</strong>
        </div>

        <div className="flex justify-between text-muted-foreground">
          <span>Golden hour</span>
          <strong className="text-foreground">
            17:54 – 18:54
          </strong>
        </div>

        <div className="flex justify-between text-muted-foreground">
          <span>Moon phase</span>
          <strong className="text-foreground">
            Full moon · 95%
          </strong>
        </div>
      </div>
    </section>
  );
}

export default SunriseSunset;