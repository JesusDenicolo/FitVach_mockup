// SOLO te pongo las partes que cambian (para no saturarte)

return (
  <div className="min-h-screen bg-background">

    {/* HEADER */}
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Logo */}
          <Logo variant="image" imageUrl={IMAGES.LOGO} showText={false} />

          {/* NAV */}
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

      {/* SEARCH */}
      <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl mb-4 md:mb-6">
          Encuentra tu compañero ideal
        </h2>

        {/* INPUT */}
        <div className="relative mb-4 md:mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input className="w-full pl-12 pr-4 py-3 md:py-4 border rounded-xl" />
        </div>

        {/* FILTROS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* aquí dejas tus selects igual */}
        </div>
      </div>


      {/* RESULTADOS */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 gap-2">
        <h3 className="text-lg md:text-xl">
          {filteredAthletes.length} deportistas encontrados
        </h3>
      </div>


      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        
        {filteredAthletes.map((athlete) => (
          
          <div
            key={athlete.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
          >
            
            <div className="relative h-48 md:h-64">
              <ImageWithFallback
                src={athlete.image}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 md:p-5">
              <h4 className="text-lg md:text-xl mb-2">{athlete.name}</h4>

              <button className="w-full bg-fitvach-orange text-white py-2 md:py-3 rounded-xl">
                Conectar
              </button>
            </div>

          </div>

        ))}
      </div>

    </main>
  </div>
);