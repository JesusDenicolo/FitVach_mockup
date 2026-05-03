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
  ArrowLeft,
  Award,
  Clock,
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
      image:
        "https://images.unsplash.com/photo-1645238426817-8c3e7d1396cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJ1bm5pbmclMjBmaXRuZXNzfGVufDF8fHx8MTc2NDI0NDUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Me encanta correr y busco compañeros de entrenamiento. Estoy disponible entre semana y preparo un 10K para el próximo mes.",
      stats: {
        workouts: 18,
        connections: 24,
        achievements: 12,
      },
      interests: ["Carreras", "Trail", "Nutrición deportiva"],
      activities: [
        { sport: "Running 5K", date: "Hoy", duration: "30 min" },
        { sport: "Intervalos en pista", date: "Ayer", duration: "45 min" },
      ],
      availability: {
        weekdays: ["7:00 AM - 9:00 AM", "6:00 PM - 8:00 PM"],
        weekend: ["8:00 AM - 12:00 PM", "5:00 PM - 7:00 PM"],
      },
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
      stats: {
        workouts: 20,
        connections: 18,
        achievements: 14,
      },
      interests: ["Rutas largas", "Ciclocross", "Nutrición"],
      activities: [
        { sport: "Ruta 60 km", date: "Hoy", duration: "2h 10m" },
        { sport: "Entrenamiento de fuerza", date: "Martes", duration: "50 min" },
      ],
      availability: {
        weekdays: ["6:00 AM - 8:00 AM", "6:00 PM - 9:00 PM"],
        weekend: ["9:00 AM - 1:00 PM", "4:00 PM - 6:00 PM"],
      },
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
      stats: {
        workouts: 12,
        connections: 14,
        achievements: 9,
      },
      interests: ["Mindfulness", "Meditación", "Stretching"],
      activities: [
        { sport: "Yoga restaurativo", date: "Hoy", duration: "55 min" },
        { sport: "Clase de Vinyasa", date: "Jueves", duration: "50 min" },
      ],
      availability: {
        weekdays: ["8:00 AM - 10:00 AM", "5:00 PM - 7:00 PM"],
        weekend: ["10:00 AM - 12:00 PM", "6:00 PM - 8:00 PM"],
      },
    },
    {
      id: 4,
      name: "David López",
      age: 31,
      sport: "Tenis",
      level: "Intermedio",
      distance: "3.2 km",
      location: "Sevilla",
      image:
        "https://images.unsplash.com/photo-1711054669706-04ff7a663834?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB0ZW5uaXMlMjBzcG9ydHN8ZW58MXx8fHwxNzY0MjYzODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Juego tenis varias veces a la semana y busco rivales con buen nivel para mejorar mi saque.",
      stats: {
        workouts: 16,
        connections: 10,
        achievements: 11,
      },
      interests: ["Tenis", "Pádel", "Condicionamiento"],
      activities: [
        { sport: "Partido amistoso", date: "Sábado", duration: "1h 30m" },
        { sport: "Práctica de saque", date: "Miércoles", duration: "45 min" },
      ],
      availability: {
        weekdays: ["7:00 AM - 9:00 AM", "5:00 PM - 7:00 PM"],
        weekend: ["10:00 AM - 2:00 PM", "5:00 PM - 7:00 PM"],
      },
    },
    {
      id: 5,
      name: "Laura Sánchez",
      age: 29,
      sport: "Natación",
      level: "Avanzado",
      distance: "4.5 km",
      location: "Granada",
      image:
        "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN3aW1taW5nJTIwcG9vbHxlbnwxfHx8fDE3NjQyMzkzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Entreno en piscina cubierta y participo en entrenamientos de grupo. Me gustaría encontrar compañeras para triatlones.",
      stats: {
        workouts: 22,
        connections: 16,
        achievements: 15,
      },
      interests: ["Triatlón", "Natación técnica", "Recuperación"],
      activities: [
        { sport: "Series de crol", date: "Viernes", duration: "40 min" },
        { sport: "Entrenamiento de técnica", date: "Miércoles", duration: "35 min" },
      ],
      availability: {
        weekdays: ["6:30 AM - 8:30 AM", "5:30 PM - 7:30 PM"],
        weekend: ["9:00 AM - 12:00 PM", "4:00 PM - 6:00 PM"],
      },
    },
    {
      id: 6,
      name: "Javier Torres",
      age: 34,
      sport: "Baloncesto",
      level: "Avanzado",
      distance: "6.8 km",
      location: "Bilbao",
      image:
        "https://images.unsplash.com/photo-1710160827611-d9cef9e08100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBiYXNrZXRiYWxsJTIwc3BvcnR8ZW58MXx8fHwxNzY0MjYzODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Juego en un equipo local y busco compañeros para entrenar tiros y jugadas al aire libre.",
      stats: {
        workouts: 19,
        connections: 12,
        achievements: 13,
      },
      interests: ["Tiros libres", "Partidos 3x3", "Resistencia"],
      activities: [
        { sport: "Entrenamiento de lanzamiento", date: "Hoy", duration: "1h" },
        { sport: "Partido de equipo", date: "Domingo", duration: "1h 15m" },
      ],
      availability: {
        weekdays: ["6:00 PM - 8:00 PM"],
        weekend: ["10:00 AM - 1:00 PM", "4:00 PM - 6:00 PM"],
      },
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

          {/* Left Column */}
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

              {/* Profile Info */}
              <div className="p-6">
                <h2 className="text-2xl mb-1">{selectedUser.name}</h2>
                <p className="text-gray-600 mb-4">{selectedUser.age} años</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Activity className="w-5 h-5 fitvach-orange" />
                    <span>{selectedUser.sport}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 fitvach-blue" />
                    <div>
                      <p>{selectedUser.location}</p>
                      <p className="text-sm text-gray-500">{selectedUser.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-green-500" />
                    <span>Miembro desde 2023</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <p className="text-2xl fitvach-orange">{selectedUser.stats.workouts}</p>
                    <p className="text-xs text-gray-600">Entrenamientos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl fitvach-blue">{selectedUser.stats.connections}</p>
                    <p className="text-xs text-gray-600">Conexiones</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-green-500">{selectedUser.stats.achievements}</p>
                    <p className="text-xs text-gray-600">Logros</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-fitvach-orange text-white py-3 rounded-xl hover:bg-fitvach-orange-dark transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    <User className="w-5 h-5" />
                    Conectar
                  </button>
                  <button className="w-full border-2 border-fitvach-blue text-fitvach-blue py-3 rounded-xl hover:bg-fitvach-blue hover:text-white transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Enviar mensaje
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="col-span-2 space-y-6">
            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl mb-4">Sobre mí</h3>
              <p className="text-gray-700 leading-relaxed">{selectedUser.description}</p>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl mb-4">Intereses</h3>
              <div className="flex flex-wrap gap-3">
                {selectedUser.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-fitvach-orange/10 to-fitvach-blue/10 rounded-full text-gray-700 border border-gray-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 fitvach-orange" />
                <h3 className="text-xl">Actividades recientes</h3>
              </div>

              <div className="space-y-4">
                {selectedUser.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-fitvach-orange to-fitvach-blue rounded-full flex items-center justify-center">
                        <Activity className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-900">{activity.sport}</p>
                        <p className="text-sm text-gray-500">{activity.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{activity.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl mb-4">Disponibilidad habitual</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="p-4 border-2 border-green-500 rounded-xl bg-green-50">
                  <p className="text-green-700">Lunes - Viernes</p>
                  <p className="text-sm text-gray-600 mt-1">{selectedUser.availability.weekdays[0]}</p>
                  <p className="text-sm text-gray-600">{selectedUser.availability.weekdays[1]}</p>
                </div>
                <div className="p-4 border-2 border-blue-500 rounded-xl bg-blue-50">
                  <p className="text-blue-700">Fines de semana</p>
                  <p className="text-sm text-gray-600 mt-1">{selectedUser.availability.weekend[0]}</p>
                  <p className="text-sm text-gray-600">{selectedUser.availability.weekend[1]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}