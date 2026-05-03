// SOLO CAMBIOS IMPORTANTES
import { useUser } from '../hooks/useUser';

export default function UserProfile() {
  const { user } = useUser();

  if (!user) return <div>Cargando...</div>;

  return (    
  <div className="min-h-screen bg-background">

  <main className="max-w-7xl mx-auto px-4 md:px-8 py-6">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* PERFIL */}
      <div className="md:col-span-1">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

          <div className="h-56 md:h-80">
            <img src={user.image} className="w-full h-full object-cover" />
          </div>

          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl">{user.name}</h2>

            <button className="w-full mt-4 py-3 bg-fitvach-orange text-white rounded-xl">
              Conectar
            </button>
          </div>

        </div>
      </div>

      {/* INFO */}
      <div className="md:col-span-2 space-y-4">

        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
          <h3 className="text-lg md:text-xl mb-2">Sobre mí</h3>
          <p>{user.description}</p>
        </div>

      </div>

    </div>

  </main>
</div>
);