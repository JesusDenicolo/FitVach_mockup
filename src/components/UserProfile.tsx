import { useNavigate, useParams } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Logo } from "./Logo";
import {
  Activity,
  User,
  MessageCircle,
  LogOut,
  MapPin,
  Calendar,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";

export function UserProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  const user = {
    name: "María González",
    age: 28,
    sport: "Running",
    location: "Madrid",
    distance: "2.5 km",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042",
    description:
      "Me encanta correr y busco compañeros de entrenamiento.",
  };

  return (
    <div className="min-h-screen bg-background">

      {/* HEADER */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">

          <div className="flex flex-col md:flex-row md:justify-between gap-4">

            <Logo />

            <nav className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base">
              <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Inicio
              </button>
              <button className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Perfil
              </button>
              <button className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat
              </button>
              <button onClick={() => navigate("/")} className="flex items-center gap-2">
                <LogOut className="w-5 h-5" />
                Salir
              </button>
            </nav>

          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6">

        {/* BACK */}
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-gray-600 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </button>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* PERFIL */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">

              {/* IMAGE */}
              <div className="h-56 md:h-80">
                <ImageWithFallback
                  src={user.image}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* INFO */}
              <div className="p-4 md:p-6 space-y-3">

                <h2 className="text-xl md:text-2xl">
                  {user.name}
                </h2>

                <p className="text-gray-600 text-sm">
                  {user.age} años
                </p>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Activity className="w-4 h-4" />
                  {user.sport}
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4" />
                  {user.location} • {user.distance}
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Calendar className="w-4 h-4" />
                  Miembro desde 2023
                </div>

                {/* BOTONES */}
                <div className="space-y-2 pt-2">
                  <button className="w-full py-3 bg-fitvach-orange text-white rounded-xl">
                    Conectar
                  </button>
                  <button className="w-full py-3 border rounded-xl">
                    Mensaje
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* CONTENIDO */}
          <div className="md:col-span-2 space-y-4">

            {/* SOBRE MI */}
            <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">
              <h3 className="text-lg md:text-xl mb-2">
                Sobre mí
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {user.description}
              </p>
            </div>

            {/* ACTIVIDAD */}
            <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">
              <h3 className="text-lg md:text-xl mb-2">
                Actividad reciente
              </h3>

              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-xl flex justify-between text-sm">
                  <span>Running 5K</span>
                  <span>30 min</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl flex justify-between text-sm">
                  <span>Entrenamiento</span>
                  <span>45 min</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}