export default function HighlightCard({
  title,
  value,
}) {
  return (
    <div className="bg-[#1E213A] p-6 text-center">

      <p className="text-gray-300">
        {title}
      </p>

      <h3 className="text-5xl font-bold mt-6">
        {value}
      </h3>

    </div>
  );
}