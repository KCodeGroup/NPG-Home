import PoolIcon from "@mui/icons-material/Pool";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SpaIcon from "@mui/icons-material/Spa";
import SecurityIcon from "@mui/icons-material/Security";
import SportsIcon from "@mui/icons-material/Sports";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ParkIcon from "@mui/icons-material/Park";
import HotTubIcon from "@mui/icons-material/HotTub";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import PetsIcon from "@mui/icons-material/Pets";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import NatureIcon from "@mui/icons-material/Nature";
import WaterIcon from "@mui/icons-material/Water";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import CottageIcon from "@mui/icons-material/Cottage";
import TerrainIcon from "@mui/icons-material/Terrain";
import GroupsIcon from "@mui/icons-material/Groups";
import HikingIcon from "@mui/icons-material/Hiking";
import ChurchIcon from "@mui/icons-material/Church";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import WavesIcon from "@mui/icons-material/Waves";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Comprehensive map of amenities to icons
export const amenityIconMap: Record<string, any> = {
  // Piscinas
  "Piscina para adultos": PoolIcon,
  "Piscina adultos": PoolIcon,
  "Piscina para niños": ChildCareIcon,
  "Piscina niños": ChildCareIcon,

  // Gimnasio
  Gimnasio: FitnessCenterIcon,
  "Gym interior": FitnessCenterIcon,
  "Gimnasio cerrado": FitnessCenterIcon,
  "Gimnasio al aire libre": FitnessCenterIcon,
  "Bio Gym al aire libre": FitnessCenterIcon,

  // Restaurantes y zonas de comida
  Restaurante: RestaurantIcon,
  Restaurantes: RestaurantIcon,
  "Zona BBQ": RestaurantIcon,
  "Zona Bar": LocalBarIcon,
  Kiosko: CottageIcon,

  // Spa y bienestar
  Spa: SpaIcon,
  Sauna: SpaIcon,
  "Sauna y turco": SpaIcon,
  Jacuzzi: HotTubIcon,
  "Ocean Sanctuary": WavesIcon,
  "Wellness Vault": FavoriteIcon,
  Stillness: SelfImprovementIcon,
  "Fireside Lounge": FireplaceIcon,

  // Seguridad
  "Seguridad 24/7": SecurityIcon,
  "Vigilancia 24/7": SecurityIcon,

  // Canchas y deportes
  "Cancha múltiple": SportsIcon,
  "Cancha de tenis": SportsIcon,
  "Cancha Fútbol 5": SportsIcon,
  "Cancha de pádel": SportsIcon,
  "Cancha Voleibol Playa": BeachAccessIcon,
  "Mini Golf": GolfCourseIcon,
  "Swimming Lane": PoolIcon,

  // Parques y áreas verdes
  "Parque para niños": ParkIcon,
  "Parque infantil": ParkIcon,
  "Parque para mascotas": PetsIcon,
  "Zonas verdes": NatureIcon,
  "Gran lago": WaterIcon,
  Plazoletas: TerrainIcon,
  Bohíos: CottageIcon,

  // Zonas sociales
  "Zona social": GroupsIcon,
  "Salón social": GroupsIcon,

  // Transporte y vías
  Ciclorrutas: DirectionsBikeIcon,
  "Senderos peatonales": HikingIcon,

  // Zonas de actividad
  "Zona de yoga": SelfImprovementIcon,

  // Compras
  "Mini market": ShoppingCartIcon,

  // Playa
  "Acceso directo a la playa": BeachAccessIcon,
  "Beach Club": BeachAccessIcon,

  // Religioso
  Capilla: ChurchIcon,

  // Estacionamiento
  Parqueaderos: LocalParkingIcon,
};

export default amenityIconMap;
