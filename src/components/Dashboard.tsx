import { useState } from "react";
import { Logo } from "./Logo";
import { Search, User, MessageCircle, Home } from "lucide-react";

export function Dashboard() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* HEADER */}
      <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between md:px-8">
        <Logo />
        <div className="flex gap-4 md:hidden">
          <User className="w-6 h-6" />
          <MessageCircle className="w-6 h-6" />
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-4 md:py-8">

        {/* SEARCH */}
        <div className="mb-4 md:mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar deportistas..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-fitvach-orange"
            />
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          {[1,2,3,4,5,6].map((id) => (
            <div key={id} className="bg-white rounded-2xl shadow-md overflow-hidden">

              {/* IMAGE */}
              <div className="h-56 md:h-64">
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25ddfcbf042"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-3">

                <h3 className="text-lg font-medium">
                  María González
                </h3>

                <p className="text-sm text-gray-600">
                  Running • 2.5 km
                </p>

                <button className="w-full py-3 bg-fitvach-orange text-white rounded-xl shadow-md">
                  Conectar
                </button>

              </div>

            </div>
          ))}

        </div>

      </main>

      {/* NAVBAR MÓVIL */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 md:hidden">

        <button className="flex flex-col items-center text-fitvach-orange">
          <Home className="w-6 h-6" />
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <Search className="w-6 h-6" />
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <MessageCircle className="w-6 h-6" />
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <User className="w-6 h-6" />
        </button>

      </nav>

    </div>
  );
}