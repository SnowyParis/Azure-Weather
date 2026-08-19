import {
  FiSettings,
  FiSun,
  FiBell,
  FiMapPin,
} from "react-icons/fi";

function Settings() {
  const settings = [
    {
      icon: FiMapPin,
      title: "Default location",
      description: "Cape Town, South Africa",
      action: "Change",
    },
    {
      icon: FiSun,
      title: "Temperature unit",
      description: "Degrees Celsius (°C)",
      action: "Change",
    },
  ];

  return (
    <section className="py-12">
      <div className="mb-6">
        <span className="text-xs text-muted-foreground">
          Customize your experience
        </span>

        <h1 className="mt-1 text-3xl font-semibold text-foreground sm:text-4xl">
          Settings
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Manage your weather app preferences.
        </p>
      </div>

      <div className="glass overflow-hidden rounded-[2rem]">
        {settings.map(
          ({ icon: Icon, title, description, action }) => (
            <div
              key={title}
              className="
                flex min-h-24 items-center gap-4
                border-b border-border
                p-4 last:border-0 sm:px-6
              "
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon />
              </div>

              <div className="min-w-0 flex-1">
                <strong className="text-sm text-foreground">
                  {title}
                </strong>

                <p className="mt-1 text-xs text-muted-foreground">
                  {description}
                </p>
              </div>

              <button className="rounded-full bg-primary/10 px-3.5 py-2 text-xs text-primary">
                {action}
              </button>
            </div>
          )
        )}

        <div className="flex min-h-24 items-center gap-4 border-b border-border p-4 sm:px-6">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <FiBell />
          </div>

          <div className="flex-1">
            <strong className="text-sm text-foreground">
              Weather alerts
            </strong>

            <p className="mt-1 text-xs text-muted-foreground">
              Receive severe weather notifications
            </p>
          </div>

          <Toggle defaultChecked />
        </div>

        <div className="flex min-h-24 items-center gap-4 p-4 sm:px-6">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <FiSettings />
          </div>

          <div className="flex-1">
            <strong className="text-sm text-foreground">
              Animations
            </strong>

            <p className="mt-1 text-xs text-muted-foreground">
              Enable weather animations and transitions
            </p>
          </div>

          <Toggle defaultChecked />
        </div>
      </div>
    </section>
  );
}

function Toggle({ defaultChecked = false }) {
  return (
    <label className="relative h-6 w-11 cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="peer sr-only"
      />

      <span className="absolute inset-0 rounded-full bg-muted transition peer-checked:bg-primary" />

      <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
    </label>
  );
}

export default Settings;