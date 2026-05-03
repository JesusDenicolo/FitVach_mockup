// SOLO CAMBIOS IMPORTANTES

return (
  <div className="min-h-screen bg-background">

    {/* HEADER */}
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <Logo showText={false} />

          <nav className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base">
            <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 text-gray-600">
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
            <button onClick={handleLogout} className="flex items-center gap-2 text-gray-600">
              <LogOut className="w-5 h-5" />
              Salir
            </button>
          </nav>

        </div>
      </div>
    </header>


    {/* MAIN */}
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">

      {/* BACK */}
      <button className="flex items-center gap-2 text-gray-600 mb-4 md:mb-6">
        <ArrowLeft className="w-5 h-5" />
        Volver
      </button>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

        {/* PERFIL */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden md:sticky md:top-24">

            <div className="relative h-56 md:h-80">
              <ImageWithFallback
                src={user.image}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl">{user.name}</h2>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                {user.age} años
              </p>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                <div className="text-center">
                  <p className="text-lg md:text-2xl fitvach-orange">
                    {user.stats.workouts}
                  </p>
                  <p className="text-xs">Entrenamientos</p>
                </div>
                <div className="text-center">
                  <p className="text-lg md:text-2xl fitvach-blue">
                    {user.stats.connections}
                  </p>
                  <p className="text-xs">Conexiones</p>
                </div>
                <div className="text-center">
                  <p className="text-lg md:text-2xl text-green-500">
                    {user.stats.achievements}
                  </p>
                  <p className="text-xs">Logros</p>
                </div>
              </div>

              {/* BOTONES */}
              <div className="space-y-2 md:space-y-3">
                <button className="w-full py-2 md:py-3 bg-fitvach-orange text-white rounded-xl">
                  Conectar
                </button>
                <button className="w-full py-2 md:py-3 border rounded-xl">
                  Mensaje
                </button>
              </div>

            </div>
          </div>
        </div>


        {/* DETALLES */}
        <div className="md:col-span-2 space-y-4 md:space-y-6">

          <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">
            <h3 className="text-lg md:text-xl mb-4">Sobre mí</h3>
            <p className="text-sm md:text-base text-gray-700">
              {user.description}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">
            <h3 className="text-lg md:text-xl mb-4">Intereses</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {user.interests.map((i, idx) => (
                <span key={idx} className="px-3 py-1 text-sm border rounded-full">
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">
            <h3 className="text-lg md:text-xl mb-4">Actividades</h3>

            <div className="space-y-3 md:space-y-4">
              {user.activities.map((a, i) => (
                <div key={i} className="flex justify-between text-sm md:text-base p-3 md:p-4 bg-gray-50 rounded-xl">
                  <span>{a.sport}</span>
                  <span>{a.duration}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  </div>
);