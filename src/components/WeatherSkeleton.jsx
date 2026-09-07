function Skeleton({ className = "" }) {
  return (
    <div
      className={`skeleton rounded-xl ${className}`}
    />
  );
}

export function CurrentWeatherSkeleton() {
  return (
    <section className="glass rounded-4xl p-6 sm:p-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

        {/* Location */}
        <div className="space-y-3">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Temperature */}
        <div className="flex items-center gap-5">
          <Skeleton className="h-20 w-20 rounded-full" />

          <div className="space-y-3">
            <Skeleton className="h-14 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>

        {/* Weather information */}
        <div className="space-y-3">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    </section>
  );
}

export function HighlightsSkeleton() {
  return (
    <section>
      <Skeleton className="mb-4 h-6 w-40" />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {Array.from({ length: 8 }).map(
          (_, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-5"
            >
              <div className="space-y-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-3 w-28" />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export function AirQualitySkeleton() {
  return (
    <section className="glass rounded-4xl p-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>

      <div className="mt-6 space-y-6">
        <div className="flex items-center gap-5">
          <Skeleton className="h-20 w-20 rounded-full" />

          <div className="space-y-3">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map(
            (_, index) => (
              <div
                key={index}
                className="space-y-2"
              >
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-5 w-16" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export function SevenDayForecastSkeleton() {
  return (
    <section>
      <Skeleton className="mb-4 h-6 w-36" />

      <div className="space-y-3">
        {Array.from({ length: 7 }).map(
          (_, index) => (
            <div
              key={index}
              className="glass flex items-center justify-between rounded-2xl p-4"
            >
              <Skeleton className="h-5 w-20" />

              <Skeleton className="h-10 w-10 rounded-full" />

              <Skeleton className="h-4 w-24" />

              <div className="flex gap-3">
                <Skeleton className="h-5 w-12" />
                <Skeleton className="h-5 w-12" />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default function WeatherSkeleton() {
  return (
    <div className="flex flex-col gap-9">
      <CurrentWeatherSkeleton />

      <HighlightsSkeleton />

      <AirQualitySkeleton />

      <SevenDayForecastSkeleton />
    </div>
  );
}