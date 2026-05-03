import { FormEvent, useState } from "react";
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

export function Dashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState("Todos");
  const [selectedDistance, setSelectedDistance] = useState("Todos");
  const [selectedLevel, setSelectedLevel] = useState("Todos");

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const athletes = [
    {
      id: 1,
      name: "María González",
      sport: "Running",
      distance: "2.5 km",
      image:
        "https://images.unsplash.com/photo-1645238426817-8c3e7d1396cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJ1bm5pbmclMjBmaXRuZXNzfGVufDF8fHx8MTc2NDI0NDUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      sport: "Ciclismo",
      distance: "5.1 km",
      image:
        "https://images.unsplash.com/photo-1552402896-0c6cd7cdecf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjeWNsaW5nJTIwYXRobGV0ZXxlbnwxfHx8fDE3NjQyNjM4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      name: "Ana Martínez",
      sport: "Yoga",
      distance: "1.8 km",
      image:
        "https://images.unsplash.com/photo-1623171855411-3b686d975cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBmaXRuZXNzfGVufDF8fHx8MTc2NDE0NTQ0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      name: "David López",
      sport: "Tenis",
      distance: "3.2 km",
      image:
        "https://images.unsplash.com/photo-1711054669706-04ff7a663834?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB0ZW5uaXMlMjBzcG9ydHN8ZW58MXx8fHwxNzY0MjYzODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      name: "Laura Sánchez",
      sport: "Natación",
      distance: "4.5 km",
      image:
        "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN3aW1taW5nJTIwcG9vbHxlbnwxfHx8fDE3NjQyMzkzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      name: "Javier Torres",
      sport: "Baloncesto",
      distance: "6.8 km",
      image:
        "https://images.unsplash.com/photo-1710160827611-d9cef9e08100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBiYXNrZXRiYWxsJTIwc3BvcnR8ZW58MXx8fHwxNzY0MjYzODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* HEADER */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <Logo variant="image" imageUrl={IMAGES.LOGO} />

            <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base w-full md:w-auto">
              <button className="flex items-center gap-2 fitvach-orange">
                <Activity className="w-5 h-5" />
                Inicio
              </button>
              <button className="flex items-center gap-2 text-gray-600">
                <User className="w-5 h-5" />
                Perfil
              </button>
              <button className="flex items-center gap-2 text-gray-600">
                <MessageCircle className="w-5 h-5" />
                Chat
              </button>
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-gray-600"
              >
                <LogOut className="w-5 h-5" />
                Salir
              </button>
            </nav>

          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-6">

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl mb-6">
            Encuentra tu compañero ideal
          </h2>

          <form onSubmit={handleSearchSubmit} className="space-y-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar deporte o persona..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-fitvach-orange focus:border-transparent transition-all"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Deporte
                </label>
                <div className="relative">
                  <select
                    value={selectedSport}
                    onChange={(e) => setSelectedSport(e.target.value)}
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
                    onChange={(e) => setSelectedDistance(e.target.value)}
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
                    onChange={(e) => setSelectedLevel(e.target.value)}
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
          </form>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          {athletes.map((athlete) => (
            <div
              key={athlete.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
            >

              {/* IMAGE */}
              <div className="h-52 md:h-64">
                <ImageWithFallback
                  src={athlete.image}
                  fallbackSrc={IMAGES.PLACEHOLDER}
                  alt={athlete.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 md:p-5 space-y-2 md:space-y-3">

                <h3 className="text-base md:text-lg font-medium">
                  {athlete.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Activity className="w-4 h-4" />
                  {athlete.sport}
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4" />
                  {athlete.distance}
                </div>

                <button
                  onClick={() => navigate(`/profile/${athlete.id}`)}
                  className="w-full py-3 md:py-3 bg-fitvach-orange text-white rounded-xl shadow-md hover:bg-fitvach-orange-dark transition-colors"
                >
                  Conectar
                </button>

              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}