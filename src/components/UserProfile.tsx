import { useNavigate, useParams } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Logo } from "./Logo";
import { IMAGES } from "@/constants/images";
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

  const athleteProfiles = [
    {
      id: 1,
      name: "María González",
      age: 28,
      sport: "Running",
      level: "Intermedio",
      distance: "2.5 km",
      location: "Madrid",
      image: IMAGES.ATHLETE_FEMALE,
      description:
        "Me encanta correr y busco compañeros de entrenamiento. Estoy disponible entre semana y preparo un 10K para el próximo mes.",
      stats: [
        { label: "Sesiones esta semana", value: "5" },
        { label: "Ritmo promedio", value: "5:10 /km" },
        { label: "Último entrenamiento", value: "25 min" },
      ],
      goal: "Preparar un 10K en menos de 55 minutos.",
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      age: 32,
      sport: "Ciclismo",
      level: "Avanzado",
      distance: "5.1 km",
      location: "Valencia",
      image:
        "https://images.unsplash.com/photo-1552402896-0c6cd7cdecf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjeWNsaW5nJTIwYXRobGV0ZXxlbnwxfHx8fDE3NjQyNjM4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Amante del ciclismo de carretera y rutas largas. Busco compañeros para salidas de fin de semana.",
      stats: [
        { label: "Kilómetros este mes", value: "120 km" },
        { label: "Velocidad media", value: "28 km/h" },
        { label: "Rutas completadas", value: "8" },
      ],
      goal: "Aumentar la resistencia para rutas de 100 km.",
    },
    {
      id: 3,
      name: "Ana Martínez",
      age: 26,
      sport: "Yoga",
      level: "Principiante",
      distance: "1.8 km",
      location: "Barcelona",
      image:
        "https://images.unsplash.com/photo-1623171855411-3b686d975cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBmaXRuZXNzfGVufDF8fHx8MTc2NDE0NTQ0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Practico yoga para mejorar mi flexibilidad y encontrar un grupo calmado con quien compartir clases.",
      stats: [
        { label: "Clases este mes", value: "7" },
        { label: "Duración media", value: "55 min" },
        { label: "Sesiones online", value: "3" },
      ],
      goal: "Conseguir mayor estabilidad y calma en cada práctica.",
    },
  ];

  const selectedUser =
    athleteProfiles.find((athlete) => athlete.id === Number(id)) ||
    athleteProfiles[0];

  return (
    <div className="min-h-screen bg-background">

      {/* HEADER */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

            <Logo />

            <nav className="flex flex-wrap justify-center gap-3 md:gap-8 text-sm md:text-base w-full md:w-auto">
              <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors">
                <Activity className="w-5 h-5" />
                Inicio
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors">
                <User className="w-5 h-5" />
                Perfil
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors">
                <MessageCircle className="w-5 h-5" />
                Chat
              </button>
              <button onClick={() => navigate("/")} className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors">
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
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* PERFIL */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">

              {/* IMAGE */}
              <div className="h-56 md:h-80">
                <ImageWithFallback
                  src={selectedUser.image}
                  alt={selectedUser.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* INFO */}
              <div className="p-4 md:p-6 space-y-3 text-center md:text-left">

                <h2 className="text-xl md:text-2xl font-semibold">
                  {selectedUser.name}
                </h2>

                <p className="text-gray-600 text-sm">
                  {selectedUser.age} años
                </p>

                <div className="flex justify-center md:justify-start items-center gap-2 text-gray-600 text-sm">
                  <Activity className="w-4 h-4" />
                  {selectedUser.sport}
                </div>

                <div className="flex justify-center md:justify-start items-center gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4" />
                  {selectedUser.location} • {selectedUser.distance}
                </div>

                <div className="flex justify-center md:justify-start items-center gap-2 text-gray-600 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  Nivel {selectedUser.level}
                </div>

                <div className="flex justify-center md:justify-start items-center gap-2 text-gray-600 text-sm">
                  <Calendar className="w-4 h-4" />
                  Miembro desde 2023
                </div>

                {/* BOTONES */}
                <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
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
                {selectedUser.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">
                <h3 className="text-lg md:text-xl mb-2">
                  Estadísticas clave
                </h3>
                <div className="space-y-3">
                  {selectedUser.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3 bg-gray-50 rounded-xl flex justify-between text-sm"
                    >
                      <span>{stat.label}</span>
                      <span>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">
                <h3 className="text-lg md:text-xl mb-2">
                  Objetivo
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {selectedUser.goal}
                </p>
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}