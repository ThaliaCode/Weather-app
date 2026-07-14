import SearchBar from './SearchBar'

function Sidebar() {
  const weather = {
    city: 'Lima',
    temp: 19,
    description: 'Scattered Clouds',
    date: 'Mon 6 Jul',
    icon: '04d',
  }

  return (
    <aside className="s text-white p-6">
      <SearchBar />

      {/* Imagen del clima */}
      <div className="flex justify-center mt-10 ">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
          alt={weather.description}
          className="w-40"
        />
      </div>

      {/* Temperatura */}
      <h1 className="text-center text-7xl font-light mt-6">
        {weather.temp}°<span className="text-gray-400 text-4xl">C</span>
      </h1>

      {/* Descripción */}
      <p className="text-center text-2xl text-gray-300 mt-6">
        {weather.description}
      </p>

      {/* Fecha */}
      <p className="text-center text-gray-400 mt-10 ">Today • {weather.date}</p>

      {/* Ciudad */}
      <p className="text-center text-gray-400 mt-6">📍 {weather.city}</p>
    </aside>
  )
}

export default Sidebar
