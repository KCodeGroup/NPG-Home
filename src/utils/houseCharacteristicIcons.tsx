import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import KitchenIcon from "@mui/icons-material/Kitchen";
import YardIcon from "@mui/icons-material/Yard";
import DeckIcon from "@mui/icons-material/Deck";
import BalconyIcon from "@mui/icons-material/Balcony";
import PoolIcon from "@mui/icons-material/Pool";
import HotTubIcon from "@mui/icons-material/HotTub";
import WeekendIcon from "@mui/icons-material/Weekend";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

// Map house characteristics to icons and labels
export const houseCharacteristicMap: Record<
  string,
  { icon: any; label: string; singularLabel?: string }
> = {
  salaComedor: { icon: WeekendIcon, label: "Sala Comedor" },
  habitaciones: {
    icon: BedIcon,
    label: "Habitaciones",
    singularLabel: "Habitación",
  },
  cocina: { icon: KitchenIcon, label: "Cocinas", singularLabel: "Cocina" },
  banos: { icon: BathtubIcon, label: "Baños", singularLabel: "Baño" },
  jardin: { icon: YardIcon, label: "Jardines", singularLabel: "Jardín" },
  patio: { icon: DeckIcon, label: "Patios", singularLabel: "Patio" },
  terraza: { icon: BalconyIcon, label: "Terrazas", singularLabel: "Terraza" },
  piscina: { icon: PoolIcon, label: "Piscinas", singularLabel: "Piscina" },
  jacuzzi: { icon: HotTubIcon, label: "Jacuzzis", singularLabel: "Jacuzzi" },
  familyRoom: { icon: WeekendIcon, label: "Family Room" },
  habitacionServicios: {
    icon: MeetingRoomIcon,
    label: "Habitación de Servicios",
  },
  parqueaderos: {
    icon: DirectionsCarIcon,
    label: "Parqueaderos",
    singularLabel: "Parqueadero",
  },
  asoleadoras: {
    icon: BeachAccessIcon,
    label: "Asoleadoras",
    singularLabel: "Asoleadora",
  },
  alcobas: { icon: BedIcon, label: "Alcobas", singularLabel: "Alcoba" },
};

export default houseCharacteristicMap;
