export default function Header({ unit, setUnit }) {
  return (
    <div className="flex justify-end gap-3 mb-6">
      <button
        onClick={() => setUnit('C')}
        className={`w-10 h-10 rounded-full font-bold transition duration-300 ${
          unit === 'C' ? 'bg-white text-[#100E1D]' : 'bg-[#585676] text-white hover:bg-opacity-85'
        }`}
      >
        °C
      </button>
      <button
        onClick={() => setUnit('F')}
        className={`w-10 h-10 rounded-full font-bold transition duration-300 ${
          unit === 'F' ? 'bg-white text-[#100E1D]' : 'bg-[#585676] text-white hover:bg-opacity-85'
        }`}
      >
        °F
      </button>
    </div>
  );
}