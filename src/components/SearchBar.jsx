function SearchBar() {
  return (
    <>
      <div className="flex justify-between items-center">
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
          Search for Places
        </button>

        <button className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
          📍
        </button>
      </div>
    </>
  )
}

export default SearchBar
