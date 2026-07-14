import HighlightCard from "../components/HeghlightCard";

export default function Highlights() {
  return (
    <section className="p-6">

      <h2 className="text-2xl font-bold mb-6">
        Today's Highlights
      </h2>

      <div className="grid gap-5">

        <HighlightCard
          title="Wind Status"
          value="7 mph"
        />

        <HighlightCard
          title="Humidity"
          value="84%"
        />

        <HighlightCard
          title="Visibility"
          value="6.4 miles"
        />

        <HighlightCard
          title="Air Pressure"
          value="998 mb"
        />

      </div>

    </section>
  );
}