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

export function Dashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* HEADER */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <Logo />

            <nav className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base">
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

        {/* SEARCH */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar deportistas..."
              className="w-full pl-12 pr-4 py-3 md:py-4 border rounded-xl focus:ring-2 focus:ring-fitvach-orange"
            />
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          {[1,2,3,4,5,6].map((id) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
            >

              {/* IMAGE */}
              <div className="h-52 md:h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517836357463-d25ddfcbf042"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 md:p-5 space-y-2 md:space-y-3">

                <h3 className="text-base md:text-lg font-medium">
                  María González
                </h3>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Activity className="w-4 h-4" />
                  Running
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4" />
                  2.5 km
                </div>

                <button className="w-full py-3 md:py-3 bg-fitvach-orange text-white rounded-xl shadow-md">
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