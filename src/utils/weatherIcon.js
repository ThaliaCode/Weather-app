// 1. Importamos todas las imágenes de tu carpeta assets usando sus nombres reales
import icon01d from '../assets/images/01d.png'; // Sol / Despejado día (si tienes 01d)
import icon01n from '../assets/images/01n.png'; // Luna / Despejado noche
import icon02d from '../assets/images/02d.png'; // Sol con nubes día
import icon02n from '../assets/images/02n.png'; // Luna con nubes noche
import icon03d from '../assets/images/03d.png'; // Nubes dispersas 
import icon09d from '../assets/images/09d.png'; // Lluvia con sol día
import icon09n from '../assets/images/09n.png'; // Lluvia con luna noche
import icon11d from '../assets/images/11d.png'; // Nubes con truenos y lluvia
import icon13d from '../assets/images/13d.png'; // Nubes con hielo / nieve

const iconMap = {
  '01d': icon01d || icon02d, 
  '01n': icon01n,
  '02d': icon02d,
  '02n': icon02n,
  '03d': icon03d,
  '03n': icon03d, 
  '04d': icon03d,
  '04n': icon03d,
  '09d': icon09d,
  '09n': icon09n,
  '10d': icon09d, 
  '10n': icon09n,
  '11d': icon11d,
  '11n': icon11d,
  '13d': icon13d,
  '13n': icon13d,
};

export const getWeatherIcon = (iconCode) => {
  if (!iconCode) return icon03d;

  return iconMap[iconCode] || icon03d;
};