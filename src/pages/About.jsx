export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Acerca de AI Code Review Platform
        </h1>

        <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
          <p>
            AI Code Review Platform es una aplicación web diseñada para mejorar
            la calidad del software mediante análisis automatizado de código
            impulsado por inteligencia artificial.
          </p>

          <p>
            La plataforma ayuda a los equipos de desarrollo a detectar posibles
            errores, vulnerabilidades de seguridad, problemas de mantenibilidad
            y rendimiento antes de que el código llegue a producción.
          </p>

          <p>
            Su objetivo principal es proporcionar revisiones de código más
            rápidas, inteligentes y confiables, reduciendo el esfuerzo manual
            mientras se incrementa la eficiencia del desarrollo y la seguridad
            del software.
          </p>

          <p>
            Este proyecto fue desarrollado como un proyecto académico para
            <span className="font-semibold text-cyan-400">
              <a
                href="https://www.udelaciudad.edu.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {" "}Universidad De La Ciudad
              </a>
            </span>
            , enfocado en combinar ingeniería de software, inteligencia
            artificial y prácticas de desarrollo seguro.
          </p>

          <div className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">
              Development Team
            </h2>

            <ul className="space-y-2 text-slate-200">
              <li>• Balvin Miguel</li>
              <li>• Daluisis Vanesa</li>
              <li>• Osaba Fernando</li>
              <li>• Peralta Diego</li>
              <li>• Sdrubolini Julieta</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}