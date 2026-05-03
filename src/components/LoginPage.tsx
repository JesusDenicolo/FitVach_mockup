import { useState } from "react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, Lock } from "lucide-react";
import { IMAGES } from "@/constants/images";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 md:px-16 py-10 md:py-0">
        <div className="w-full max-w-md">

          {/* LOGO */}
          <div className="mb-8 md:mb-12">
            <img
              src={IMAGES.LOGO}
              alt="Logo"
              className="w-40 md:w-64 mb-4"
            />
            <p className="text-gray-600 text-sm md:text-base">
              Conecta. Entrena. Supérate.
            </p>
          </div>

          {/* TITULO */}
          <h2 className="text-2xl md:text-3xl mb-2">
            {isRegistering ? "Crea tu cuenta" : "Bienvenido de nuevo"}
          </h2>

          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
            {isRegistering
              ? "Únete a la comunidad deportiva"
              : "Inicia sesión para continuar"}
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">

            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-gray-700 text-sm">
                Correo electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fitvach-orange"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-2 text-gray-700 text-sm">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fitvach-orange"
                  required
                />
              </div>
            </div>

            {/* OPCIONES */}
            {!isRegistering && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-fitvach-orange" />
                  <span className="text-gray-600">Recordarme</span>
                </label>
                <button className="fitvach-orange hover:underline">
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            )}

            {/* BOTÓN */}
            <button
              type="submit"
              className="w-full bg-fitvach-orange text-white py-3 md:py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              {isRegistering ? "Registrarse" : "Iniciar sesión"}
            </button>
          </form>

          {/* SWITCH */}
          <div className="mt-6 text-center text-sm md:text-base">
            <p className="text-gray-600">
              {isRegistering ? "¿Ya tienes cuenta? " : "¿No tienes cuenta? "}
              <button
                onClick={() => setIsRegistering(!isRegistering)}
                className="fitvach-blue hover:underline"
              >
                {isRegistering ? "Inicia sesión" : "Regístrate"}
              </button>
            </p>
          </div>

        </div>
      </div>

      {/* IMAGEN */}
      <div className="hidden md:block md:w-1/2 relative">
        <ImageWithFallback
          src={IMAGES.BACKGROUND_LOGIN}
          alt="fitness"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-fitvach-orange/80 to-fitvach-blue/80 flex items-center justify-center">
          <div className="text-center text-white px-12">
            <h2 className="text-4xl lg:text-5xl mb-4">
              Encuentra tu compañero ideal
            </h2>
            <p className="text-lg lg:text-xl opacity-90">
              Únete a miles de deportistas
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}