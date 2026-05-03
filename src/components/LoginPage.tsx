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
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-16 bg-white">
        <div className="w-full max-w-md">

          <img src={IMAGES.LOGO} className="w-40 md:w-64 mb-4" />

          <h2 className="text-2xl md:text-3xl mb-2">
            {isRegistering ? "Crea tu cuenta" : "Bienvenido de nuevo"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-12 py-3 border rounded-xl"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 py-3 border rounded-xl"
              />
            </div>

            <button className="w-full py-3 md:py-4 bg-fitvach-orange text-white rounded-xl">
              Entrar
            </button>

          </form>
        </div>
      </div>

      {/* IMAGEN */}
      <div className="hidden md:block md:w-1/2">
        <ImageWithFallback
          src={IMAGES.BACKGROUND_LOGIN}
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}