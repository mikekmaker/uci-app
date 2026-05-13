import { useHistorial } from "../../hooks/useHistorial";

export default function HistorialForm() {
  const { data, isLoading, isError } = useHistorial();

  if (isLoading) {
    return (
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
        <p className="text-slate-300">
          Cargando historial...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-slate-900/70 border border-red-900 rounded-2xl p-6">
        <p className="text-red-400">
          Error al cargar historial
        </p>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-2">
          Historial de Auditorías
        </h2>

        <p className="text-slate-300 text-sm">
          No existen auditorías registradas.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Historial de Auditorías
        </h2>

        <p className="text-slate-300 text-sm mt-2">
          Consulte los análisis realizados recientemente.
        </p>
      </div>

      <div className="space-y-4">
        {data.map((audit) => (
          <div
            key={audit.id}
            className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 transition hover:border-cyan-500/40 hover:bg-slate-800"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-white font-semibold uppercase">
                    {audit.lenguaje}
                  </span>

                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${
                      audit.estado === "COMPLETED"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                    }`}
                  >
                    {audit.estado}
                  </span>
                </div>

                <p className="text-sm text-slate-400">
                  Auditoría #{audit.id}
                </p>
              </div>

              <div className="text-sm text-slate-400">
                {new Date(audit.fechaCreacion).toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}