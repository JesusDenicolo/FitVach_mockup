import { useState } from "react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Logo } from "./common/Logo";
import {
  Activity,
  Search,
  User,
  MessageCircle,
  LogOut,
  MapPin,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { IMAGES } from "@/constants/images";

interface Athlete {
  id: number;
  name: string;
  sport: string;
  distance: string;
  level: string;
  image: string;
}

const athletes: Athlete[] = [
  {
    id: 1,
    name: "María González",
    sport: "Running",
    distance: "2.5 km",
    level: "Intermedio",
    image:
      "https://images.unsplash.com/photo-1645238426817-8c3e7d1396cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJ1bm5pbmclMjBmaXRuZXNzfGVufDF8fHx8MTc2NDI0NDUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    sport: "Ciclismo",
    distance: "5.1 km",
    level: "Avanzado",
    image:
      "https://images.unsplash.com/photo-1552402896-0c6cd7cdecf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjeWNsaW5nJTIwYXRobGV0ZXxlbnwxfHx8fDE3NjQyNjM4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Ana Martínez",
    sport: "Yoga",
    distance: "1.8 km",
    level: "Principiante",
    image:
      "https://images.unsplash.com/photo-1623171855411-3b686d975cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBmaXRuZXNzfGVufDF8fHx8MTc2NDE0NTQ0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "David López",
    sport: "Tenis",
    distance: "3.2 km",
    level: "Intermedio",
    image:
      "https://images.unsplash.com/photo-1711054669706-04ff7a663834?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB0ZW5uaXMlMjBzcG9ydHN8ZW58MXx8fHwxNzY0MjYzODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Laura Sánchez",
    sport: "Natación",
    distance: "4.5 km",
    level: "Avanzado",
    image:
      "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN3aW1taW5nJTIwcG9vbHxlbnwxfHx8fDE3NjQyMzkzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Javier Torres",
    sport: "Baloncesto",
    distance: "6.8 km",
    level: "Intermedio",
    image:
      "https://images.unsplash.com/photo-1710160827611-d9cef9e08100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBiYXNrZXRiYWxsJTIwc3BvcnR8ZW58MXx8fHwxNzY0MjYzODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Dashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState("Todos");
  const [selectedDistance, setSelectedDistance] =
    useState("Todos");
  const [selectedLevel, setSelectedLevel] = useState("Todos");

  const filteredAthletes = athletes.filter((athlete) => {
    const matchesSearch =
      athlete.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      athlete.sport
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesSport =
      selectedSport === "Todos" ||
      athlete.sport === selectedSport;
    const matchesLevel =
      selectedLevel === "Todos" ||
      athlete.level === selectedLevel;

    return matchesSearch && matchesSport && matchesLevel;
  });

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="image" imageUrl={IMAGES.LOGO} showText={false} className="cursor-pointer" />

            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <button className="flex items-center gap-2 fitvach-orange hover:opacity-80 transition-opacity">
                <Activity className="w-5 h-5" />
                Inicio
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <User className="w-5 h-5" />
                Mi Perfil
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <MessageCircle className="w-5 h-5" />
                Chat
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Salir
              </button>
            </nav>

            {/* User Avatar */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm">Usuario Demo</p>
                <p className="text-xs text-gray-500">
                  user@fitvach.com
                </p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-fitvach-orange to-fitvach-blue rounded-full flex items-center justify-center text-white">
                UD
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl mb-6">
            Encuentra tu compañero ideal
          </h2>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar deporte o persona..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-fitvach-orange focus:border-transparent transition-all"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Deporte
              </label>
              <div className="relative">
                <select
                  value={selectedSport}
                  onChange={(e) =>
                    setSelectedSport(e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-fitvach-orange focus:border-transparent transition-all cursor-pointer bg-white"
                >
                  <option>Todos</option>
                  <option>Running</option>
                  <option>Ciclismo</option>
                  <option>Yoga</option>
                  <option>Tenis</option>
                  <option>Natación</option>
                  <option>Baloncesto</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Distancia
              </label>
              <div className="relative">
                <select
                  value={selectedDistance}
                  onChange={(e) =>
                    setSelectedDistance(e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-fitvach-orange focus:border-transparent transition-all cursor-pointer bg-white"
                >
                  <option>Todos</option>
                  <option>Menos de 3 km</option>
                  <option>3-5 km</option>
                  <option>5-10 km</option>
                  <option>Más de 10 km</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Nivel
              </label>
              <div className="relative">
                <select
                  value={selectedLevel}
                  onChange={(e) =>
                    setSelectedLevel(e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-fitvach-orange focus:border-transparent transition-all cursor-pointer bg-white"
                >
                  <option>Todos</option>
                  <option>Principiante</option>
                  <option>Intermedio</option>
                  <option>Avanzado</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl text-gray-700">
            {filteredAthletes.length} deportistas encontrados
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <TrendingUp className="w-4 h-4" />
            Ordenar por relevancia
          </div>
        </div>

        {/* Athletes Grid */}
        <div className="grid grid-cols-3 gap-6">
          {filteredAthletes.map((athlete) => (
            <div
              key={athlete.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => navigate(`/profile/${athlete.id}`)}
            >
              <div className="relative h-64">
                <ImageWithFallback
                  src={athlete.image}
                  alt={athlete.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {athlete.level}
                </div>
              </div>

              <div className="p-5">
                <h4 className="text-xl mb-2">{athlete.name}</h4>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Activity className="w-4 h-4 fitvach-orange" />
                  <span>{athlete.sport}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 fitvach-blue" />
                  <span>{athlete.distance}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/profile/${athlete.id}`);
                  }}
                  className="w-full bg-fitvach-orange text-white py-3 rounded-xl hover:bg-fitvach-orange-dark transition-all shadow-md hover:shadow-lg"
                >
                  Conectar
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAthletes.length === 0 && (
          <div className="text-center py-16">
            <Activity className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl text-gray-600 mb-2">
              No se encontraron resultados
            </h3>
            <p className="text-gray-500">
              Intenta ajustar los filtros de búsqueda
            </p>
          </div>
        )}
      </main>
    </div>
  );
}