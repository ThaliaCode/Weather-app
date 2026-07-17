import { useWeather } from './hooks/useWeather';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import DetailCard from './components/DetailCard';

function App() {
  const { 
    weather, 
    loading, 
    error, 
    unit, 
    setUnit, 
    searchCity, 
    getDeviceLocation 
  } = useWeather();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#100E1D] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#100E1D] text-white flex flex-col md:flex-row">
      
      {/* Sidebar Izquierdo */}
      <aside className="w-full md:w-[30%] lg:w-[25%] bg-[#1E213A] flex flex-col">
        <CurrentWeather 
          current={weather?.current} 
          unit={unit} 
          onSearch={searchCity} 
          onGetLocation={getDeviceLocation} 
        />
        {error && <p className="text-red-400 text-xs text-center pb-4 bg-[#1E213A]">{error}</p>}
      </aside>

      {/* Panel Derecho */}
      <main className="flex-1 p-6 md:p-10 lg:px-20 flex flex-col justify-between bg-[#100E1D]">
        <div>
          <Header unit={unit} setUnit={setUnit} />

          <Forecast forecastList={weather?.forecast?.list} unit={unit} />

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">Today's Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <DetailCard 
                title="Wind status" 
                value={weather?.current?.wind?.speed} 
                unit="m/s" 
                isWind 
                windDeg={weather?.current?.wind?.deg} 
              />
              <DetailCard 
                title="Humidity" 
                value={weather?.current?.main?.humidity} 
                unit="%" 
                isHumidity 
              />
              <DetailCard 
                title="Visibility" 
                value={(weather?.current?.visibility / 1000).toFixed(1)} 
                unit="km" 
              />
              <DetailCard 
                title="Air Pressure" 
                value={weather?.current?.main?.pressure} 
                unit="mb" 
              />
            </div>
          </div>
        </div>

        <footer className="text-center text-[#A09FB1] text-xs font-semibold mt-12 pb-4">
          created by <span className="underline font-bold">Thalía</span>
        </footer>
      </main>

    </div>
  );
}

export default App;