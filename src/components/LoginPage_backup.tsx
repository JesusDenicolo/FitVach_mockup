<div className="min-h-screen flex flex-col md:flex-row">

  {/* Lado izquierdo - Formulario */}
  <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 bg-white py-10 md:py-0">

    {/* Logo */}
    <div className="mb-8 md:mb-12">
      <Logo className="mb-4" showText={true} />
      <p className="text-gray-600 text-sm md:text-base">
        Conecta. Entrena. Supérate.
      </p>
    </div>

    {/* Formulario */}
    <div className="w-full max-w-md">
      <h2 className="text-2xl md:text-3xl mb-2">
        {isRegistering ? "Crea tu cuenta" : "Bienvenido de nuevo"}
      </h2>

      <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
        {isRegistering
          ? "Únete a la comunidad deportiva"
          : "Inicia sesión para continuar"}
      </p>

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
            />
          </div>
        </div>

        {/* OPCIONES */}
        {!isRegistering && (
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-fitvach-orange" />
              Recordarme
            </label>
            <button className="fitvach-orange hover:underline">
              ¿Olvidaste?
            </button>
          </div>
        )}

        {/* BOTÓN */}
        <button className="w-full bg-fitvach-orange text-white py-3 md:py-4 rounded-xl">
          {isRegistering ? "Registrarse" : "Iniciar sesión"}
        </button>

      </form>

      {/* SOCIAL */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6">
        <button className="py-3 border rounded-xl">Google</button>
        <button className="py-3 border rounded-xl">Facebook</button>
      </div>

    </div>
  </div>

  {/* Lado derecho - Imagen */}
  <div className="hidden md:block md:w-1/2 relative">
    <ImageWithFallback
      src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1080"
      alt="Sports fitness"
      className="w-full h-full object-cover"
    />
  </div>

</div>