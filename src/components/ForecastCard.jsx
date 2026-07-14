export default function ForecastCard() {
  return (
    <div className="bg-[#1E213A] p-4 text-center">

      <p>Tomorrow</p>

      <div className="text-5xl py-4">
        ☁
      </div>

      <p>
        <span className="text-white">24°C</span>

        <span className="text-gray-400 ml-3">
          18°C
        </span>
      </p>

    </div>
  );
}