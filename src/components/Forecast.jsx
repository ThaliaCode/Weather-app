import ForecastCard from "./ForecastCard";

export default function Forecast() {
  return (
    <section className="p-6">

      <div className="grid grid-cols-2 gap-4">

        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />

      </div>

    </section>
  );
}