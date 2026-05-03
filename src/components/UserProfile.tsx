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
  Award,
  TrendingUp,
  Clock,
  Heart,
  ArrowLeft,
} from "lucide-react";
import logoImage from "figma:asset/6fd28adbe9365031adbd62e23c6ba349c0d66e5f.png";

interface UserData {
  id: number;
  name: string;
  age: number;
  sport: string;
  level: string;
  location: string;
  distance: string;
  image: string;
  description: string;
  activities: {
    sport: string;
    date: string;
    duration: string;
  }[];
  stats: {
    workouts: number;
    connections: number;
    achievements: number;
  };
  interests: string[];
}

const userData: Record<number, UserData> = {
  1: {
    id: 1,
    name: "María González",
    age: 28,
    sport: "Running",
    level: "Intermedio",
    location: "Madrid, España",
    distance: "2.5 km de ti",
    image:
      "https://images.unsplash.com/photo-1645238426817-8c3e7d1396cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJ1bm5pbmclMjBmaXRuZXNzfGVufDF8fHx8MTc2NDI0NDUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "¡Hola! Soy María y me encanta correr por las mañanas. Busco compañeros para entrenar 3-4 veces por semana. Mi objetivo es completar mi primera maratón el próximo año. Me gusta mantener un ritmo constante y disfrutar del paisaje mientras entreno.",
    activities: [
      { sport: "Running 10K", date: "Hace 2 días", duration: "55 min" },
      { sport: "Running 5K", date: "Hace 5 días", duration: "28 min" },
      { sport: "Entrenamiento Intervalos", date: "Hace 1 semana", duration: "45 min" },
    ],
    stats: {
      workouts: 124,
      connections: 38,
      achievements: 15,
    },
    interests: ["Maratones", "Trail Running", "Mindfulness", "Nutrición Deportiva"],
  },
  2: {
    id: 2,
    name: "Carlos Ruiz",
    age: 32,
    sport: "Ciclismo",
    level: "Avanzado",
    location: "Barcelona, España",
    distance: "5.1 km de ti",
    image:
      "https://images.unsplash.com/photo-1552402896-0c6cd7cdecf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjeWNsaW5nJTIwYXRobGV0ZXxlbnwxfHx8fDE3NjQyNjM4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Ciclista apasionado con más de 5 años de experiencia. Me especializo en ciclismo de carretera y montaña. Busco grupo para rutas de fin de semana y entrenamientos intensivos entre semana.",
    activities: [
      { sport: "Ruta Montaña 50K", date: "Hace 1 día", duration: "2h 30min" },
      { sport: "Ciclismo Carretera", date: "Hace 4 días", duration: "1h 45min" },
      { sport: "Intervalos", date: "Hace 6 días", duration: "1h 15min" },
    ],
    stats: {
      workouts: 256,
      connections: 67,
      achievements: 34,
    },
    interests: ["Ciclismo de Montaña", "Competiciones", "Mecánica", "Fotografía"],
  },
  3: {
    id: 3,
    name: "Ana Martínez",
    age: 25,
    sport: "Yoga",
    level: "Principiante",
    location: "Valencia, España",
    distance: "1.8 km de ti",
    image:
      "https://images.unsplash.com/photo-1623171855411-3b686d975cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBmaXRuZXNzfGVufDF8fHx8MTc2NDE0NTQ0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Empezando mi camino en el yoga y el bienestar. Busco personas con quienes compartir clases y aprender juntos. Me interesa especialmente el Hatha y Vinyasa Yoga.",
    activities: [
      { sport: "Vinyasa Flow", date: "Hace 1 día", duration: "60 min" },
      { sport: "Hatha Yoga", date: "Hace 3 días", duration: "45 min" },
      { sport: "Meditación", date: "Hace 5 días", duration: "30 min" },
    ],
    stats: {
      workouts: 45,
      connections: 22,
      achievements: 8,
    },
    interests: ["Meditación", "Pilates", "Bienestar", "Lectura"],
  },
};

export function UserProfile() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const user = userData[Number(id) || 1] || userData[1];

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
            <Logo showText={false} className="cursor-pointer" />

            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
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
                <p className="text-xs text-gray-500">user@fitvach.com</p>
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
        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver a resultados
        </button>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="col-span-1">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden sticky top-24">
              {/* Profile Image */}
              <div className="relative h-80">
                <ImageWithFallback
                  src={user.image}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 fitvach-orange" />
                  {user.level}
                </div>
                <button className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>

              {/* Profile Info */}
              <div className="p-6">
                <h2 className="text-2xl mb-1">{user.name}</h2>
                <p className="text-gray-600 mb-4">{user.age} años</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Activity className="w-5 h-5 fitvach-orange" />
                    <span>{user.sport}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 fitvach-blue" />
                    <div>
                      <p>{user.location}</p>
                      <p className="text-sm text-gray-500">{user.distance}</p>
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
                    <p className="text-2xl fitvach-orange">{user.stats.workouts}</p>
                    <p className="text-xs text-gray-600">Entrenamientos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl fitvach-blue">{user.stats.connections}</p>
                    <p className="text-xs text-gray-600">Conexiones</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-green-500">{user.stats.achievements}</p>
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
              <p className="text-gray-700 leading-relaxed">{user.description}</p>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl mb-4">Intereses</h3>
              <div className="flex flex-wrap gap-3">
                {user.interests.map((interest, index) => (
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
                {user.activities.map((activity, index) => (
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
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border-2 border-green-500 rounded-xl bg-green-50">
                  <p className="text-green-700">Lunes - Viernes</p>
                  <p className="text-sm text-gray-600 mt-1">7:00 AM - 9:00 AM</p>
                  <p className="text-sm text-gray-600">6:00 PM - 8:00 PM</p>
                </div>
                <div className="p-4 border-2 border-blue-500 rounded-xl bg-blue-50">
                  <p className="text-blue-700">Fines de semana</p>
                  <p className="text-sm text-gray-600 mt-1">8:00 AM - 12:00 PM</p>
                  <p className="text-sm text-gray-600">5:00 PM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}