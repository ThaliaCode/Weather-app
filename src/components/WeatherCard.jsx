import { getWeatherIcon } from '../utils/weatherIcon';

export default function WeatherCard({ date, iconCode, max, min, unit }) {
  const convertTemp = (temp) => {
    return unit === 'F' ? Math.round((temp * 1.8) + 32) : Math.round(temp);
  };

  return (
    <div className="bg-[#1E213A] p-4 rounded-md flex flex-col items-center justify-between text-center min-w-[120px] shadow-lg">
      <p className="text-white text-sm font-medium mb-3">{date}</p>
      <img 
        src={getWeatherIcon(iconCode)} 
        alt="Icono clima" 
        className="w-14 h-14 object-contain mb-4" 
      />
      <div className="flex justify-between w-full text-sm">
        <span className="text-white font-medium">{convertTemp(max)}°{unit}</span>
        <span className="text-[#A09FB1]">{convertTemp(min)}°{unit}</span>
      </div>
    </div>
  );
}