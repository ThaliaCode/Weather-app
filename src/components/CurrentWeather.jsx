import { useState } from 'react';
import { getWeatherIcon } from '../utils/weatherIcon';
import SearchBar from './SearchBar';
import cloudBg from '../assets/Cloud-background.png';
import locationSvg from '../assets/location.svg';
import locationOnSvg from '../assets/location_on.svg';

export default function CurrentWeather({ current, unit, onSearch, onGetLocation }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  if (!current) return null;

  let temp = Math.round(current.main.temp);
  if (unit === 'F') {
    temp = Math.round((temp * 1.8) + 32);
  }

  const weatherCondition = current.weather[0].main;
  const iconCode = current.weather[0].icon;

  const formattedDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  }).replace(',', '');

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 bg-[#1E213A] min-h-screen md:min-h-0">
      {isSearchOpen ? (
        <SearchBar 
          onSearch={(city) => { onSearch(city); setIsSearchOpen(false); }} 
          onClose={() => setIsSearchOpen(false)} 
        />
      ) : (
        <>
          <div className="flex justify-between items-center w-full">
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="bg-[#6E707A] text-[#E7E7EB] px-4 py-2 shadow-md hover:bg-opacity-80 transition text-sm"
            >
              Search for places
            </button>
            <button 
              onClick={onGetLocation} 
              className="bg-[#6E707A] rounded-full p-2.5 shadow-md hover:bg-opacity-80 transition"
            >
              <img src={locationSvg} alt="location" className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex justify-center items-center w-full h-48 my-8">
            <img src={cloudBg} alt="background clouds" className="absolute inset-0 w-full h-full object-contain opacity-10" />
            <img src={getWeatherIcon(iconCode)} alt={weatherCondition} className="relative z-10 w-36 h-36 object-contain" />
          </div>

          <div className="text-center my-6">
            <div className="flex justify-center items-baseline">
              <span className="text-[100px] font-medium leading-none text-[#E7E7EB]">{temp}</span>
              <span className="text-4xl text-[#A09FB1] ml-1">°{unit}</span>
            </div>
            <p className="text-3xl text-[#A09FB1] font-semibold mt-6 capitalize">{weatherCondition}</p>
          </div>

          <div className="text-center flex flex-col gap-4 text-[#88869D] mt-auto">
            <p className="text-sm">Today <span className="mx-2">•</span> {formattedDate}</p>
            <div className="flex justify-center items-center gap-2 font-semibold">
              <img src={locationOnSvg} alt="marker" className="w-4 h-4" />
              <span>{current.name}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}