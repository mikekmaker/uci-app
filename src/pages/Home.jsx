export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      {/* Fondo hero */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background_iacrp.png')",
          backgroundPosition: "center 20px"
        }}
      />

      {/* Overlay opcional */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          AI Code Review Platform
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Encuentra Bugs Anticipadamente • Agrega Seguridad a tu Programa
        </p>
      </div>
    </div>
  );
}