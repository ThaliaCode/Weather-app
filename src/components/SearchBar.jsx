import { useState } from 'react';
import searchSvg from '../assets/search.svg';

export default function SearchBar({ onSearch, onClose }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
      setQuery(""); // Limpia el input tras buscar
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Botón para cerrar la barra de búsqueda en móvil */}
      <div className="flex justify-end mb-6">
        <button 
          onClick={onClose} 
          className="text-white text-3xl font-light hover:text-gray-300 transition"
        >
          &times;
        </button>
      </div>

      {/* Formulario de búsqueda */}
      <form onSubmit={handleSubmit} className="flex gap-3 w-full h-12">
        <div className="flex-1 border border-[#E7E7EB] flex items-center px-4 gap-3 bg-transparent">
          <img 
            src={searchSvg} 
            alt="Search icon" 
            className="w-5 h-5 opacity-50"
          />
          <input 
            type="text" 
            placeholder="search location"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent w-full text-[#E7E7EB] outline-none placeholder-[#616475] text-sm"
          />
        </div>
        <button 
          type="submit" 
          className="bg-[#3C47E9] text-[#E7E7EB] px-5 font-semibold hover:bg-blue-700 transition duration-200 text-sm"
        >
          Search
        </button>
      </form>
    </div>
  );
}