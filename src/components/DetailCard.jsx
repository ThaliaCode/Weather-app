import navigationSvg from '../assets/navigation.svg';

export default function DetailCard({ title, value, unit, isWind, isHumidity, windDeg }) {
  return (
    <div className="bg-[#1E213A] p-6 rounded-md flex flex-col items-center justify-center text-center shadow-md">
      <h3 className="text-gray-300 text-sm font-medium mb-2">{title}</h3>
      <p className="text-5xl font-bold text-white mb-4">
        {value} <span className="text-3xl font-light">{unit}</span>
      </p>

      {/* Condicional para dirección del viento */}
      {isWind && (
        <div className="flex items-center gap-2">
          <div className="bg-[#585676] rounded-full w-8 h-8 flex items-center justify-center">
            <img 
              src={navigationSvg} 
              alt="Dirección" 
              className="w-4 h-4 transition-transform duration-500"
              style={{ transform: `rotate(${windDeg}deg)` }}
            />
          </div>
          <span className="text-xs uppercase text-[#E7E7EB] font-medium">WSW</span>
        </div>
      )}

      {/* Condicional para barra de progreso de Humedad */}
      {isHumidity && (
        <div className="w-full max-w-[220px] text-xs text-[#A09FB1] flex flex-col gap-1">
          <div className="flex justify-between font-bold">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div className="w-full h-2 bg-[#E7E7EB] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#FFEC65] transition-all duration-700" 
              style={{ width: `${value}%` }}
            ></div>
          </div>
          <span className="text-right font-bold">%</span>
        </div>
      )}
    </div>
  );
}