import WeatherCard from './WeatherCard';

export default function Forecast({ forecastList, unit }) {
  if (!forecastList) return null;

  // Filtramos para tomar una lectura diaria (usualmente a las 12:00:00)
  const dailyForecast = forecastList.filter(reading => reading.dt_txt.includes("12:00:00")).slice(0, 5);

  const formatCardDate = (dateString, index) => {
    if (index === 0) return "Tomorrow";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 my-8">
      {dailyForecast.map((day, index) => (
        <WeatherCard
          key={day.dt}
          date={formatCardDate(day.dt_txt, index)}
          iconCode={day.weather[0].icon}
          max={day.main.temp_max}
          min={day.main.temp_min}
          unit={unit}
        />
      ))}
    </div>
  );
}