import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Label } from "../ui/Label";
import { Button } from "../ui/Button";
import { useAudit } from "../../hooks/useAudit";

export default function AuditForm() {
  const { mutate, isPending, error } = useAudit();
  const USE_MOCK = false;
  const [language, setLanguage] = useState("java");
  const [analysisType, setAnalysisType] = useState("security");
  const [code, setCode] = useState(`public class Test {
    public void execute(String userId) {
        String query = "SELECT * FROM users WHERE id = " + userId;
        System.out.println(query);
    }
}`);

  // resultado de explicacion pedagogica
  const [resultado, setResultado] = useState("");
  const [typedText, setTypedText] = useState("");

  // estado del resultado del analisis 
  const [analysisResult, setAnalysisResult] = useState(null);

  const mockResponse = {
    id: 1,
    language: "java",
    fecha: "2026-05-01",
    hora: "21:05:19",
    issues: [
      {
        severity: "CRITICO",
        type: "SQL_INJECTION",
        description: "Aunque se utiliza un PreparedStatement...",
        line: 15,
      },
      {
        severity: "ADVERTENCIA",
        type: "MANEJO_DE_EXCEPCIONES",
        description: "El código no maneja adecuadamente las excepciones...",
        line: 10,
      },
      {
        severity: "SUGERENCIA",
        type: "NOMBRE_DE_VARIABLES",
        description: "Los nombres de las variables podrían ser más descriptivos...",
        line: 5,
      },
    ],
    refactored_code: "public class LoginSeguro { ... }",
    pedagogical_explanation:
      "La seguridad en la autenticación de usuarios es fundamental...",
  };

  const handleSubmit = () => {
  const payload = {
    code: code,
    language: language,
  };

  console.log("Payload auditoría:", payload);

  if (USE_MOCK) {
    setAnalysisResult(mockResponse);
    setResultado(mockResponse.pedagogical_explanation);
    return;
  }

  mutate(payload, {
    onSuccess: (response) => {
      setAnalysisResult(response.data || response);
      setResultado(
        (response.data || response).pedagogical_explanation
      );
    },
  });
};

  // 🔹 Typewriter effect
  useEffect(() => {
    if (!resultado) return;

    let i = 0;
    setTypedText("");

    const interval = setInterval(() => {
      i++;
      setTypedText(resultado.slice(0, i));

      if (i >= resultado.length) {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [resultado]);

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 sm:px-6 py-8">
      <div className="mx-auto w-full max-w-7xl">

        {/* 🔹 GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* 🔹 CONTROLES */}
          <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-slate-800 flex flex-col gap-6">
            <p className="text-sm text-slate-300 leading-relaxed">
              Selecciona el lenguaje, el tipo de análisis y envía el código
              para revisión estática impulsada por inteligencia artificial.
            </p>

            <div className="grid gap-5">
              <div>
                <Label className="mb-2 block text-sm text-slate-200">
                  Lenguaje
                </Label>

                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 transition"
                >
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                  <option value="csharp">C#</option>
                  <option value="javascript">JavaScript</option>
                  <option value="kotlin">Kotlin</option>
                </select>
              </div>

              <div>
                <Label className="mb-2 block text-sm text-slate-200">
                  Tipo de análisis
                </Label>

                <select
                  value={analysisType}
                  onChange={(e) => setAnalysisType(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 transition"
                >
                  <option value="security">Security</option>
                  <option value="clean_code">Clean Code</option>
                  <option value="performance">Performance</option>
                  <option value="full_review">Full Review</option>
                </select>
              </div>
            </div>

            {/* 🔹 ERROR */}
            {error && (
              <p className="text-sm text-red-500">
                {error.response?.data?.detail || "Error al analizar el código"}
              </p>
            )}

            <Button
              onClick={handleSubmit}
              disabled={isPending}
              className="w-full rounded-2xl py-5 text-base font-semibold mt-auto"
            >
              {isPending ? "Analizando..." : "Enviar a revisión"}
            </Button>
          </div>

          {/* 🔹 EDITOR */}
          <div className="bg-slate-900/70 rounded-2xl border border-slate-800 overflow-hidden min-h-[400px]">
            <Editor
              height="100%"
              theme="vs-dark"
              language={language}
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                automaticLayout: true,
                scrollBeyondLastLine: false,
                wordWrap: "on",
                wrappingIndent: "same",
                padding: {
                  top: 20,
                },
              }}
            />
          </div>

          {/* 🔹 RESULTADO */}
          <div className="space-y-6">

          {/* 🔹 Issues */}
          {analysisResult?.issues && (
            <div>
              <h3 className="text-sm font-semibold mb-3 text-slate-300">
                Issues detectados
              </h3>

              <div className="space-y-3">
                {analysisResult.issues.map((issue, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-800 border border-slate-700"
                  >
                    <div className="text-xs font-semibold mb-1">
                      {issue.severity} • {issue.type} • Línea {issue.line}
                    </div>
                    <div className="text-xs text-slate-300">
                      {issue.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 🔹 Código refactorizado */}
          {analysisResult?.refactored_code && (
            <div>
              <h3 className="text-sm font-semibold mb-3 text-slate-300">
                Código sugerido
              </h3>

              <div className="rounded-xl overflow-hidden border border-slate-800">
                <Editor
                  height="300px"
                  theme="vs-dark"
                  language={language}
                  value={analysisResult.refactored_code}
                  options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    fontSize: 13,
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                  }}
                />
              </div>
            </div>
          )}

          {/* 🔹 Explicación (TYPEWRITER) */}
          {analysisResult?.pedagogical_explanation && (
            <div>
              <h3 className="text-sm font-semibold mb-3 text-slate-300">
                Explicación
              </h3>

              <div className="text-sm text-slate-200 whitespace-pre-wrap font-mono">
                {typedText}
              </div>
            </div>
          )}

        </div>

        </div>
      </div>
    </div>
  );
}