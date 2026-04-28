import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Label } from "../ui/Label";
import { Button } from "../ui/Button";

export default function AuditForm() {
  const [language, setLanguage] = useState("java");
  const [analysisType, setAnalysisType] = useState("security");
  const [code, setCode] = useState(`public class Test {
    public void execute(String userId) {
        String query = "SELECT * FROM users WHERE id = " + userId;
        System.out.println(query);
    }
}`);

  const handleSubmit = () => {
    const payload = {
      codigoFuente: code,
      lenguaje: language,
      tipoAnalisis: analysisType,
    };

    console.log("Payload auditoría:", payload);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto w-full max-w-7xl rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">

          {/* Panel izquierdo */}
          <div className="p-8 border-r border-slate-800 flex flex-col gap-8">
            <div><p className="text-base text-slate-300 mt-4 leading-relaxed">
                Selecciona el lenguaje, el tipo de análisis y envía el código
                para revisión estática impulsada por inteligencia artificial.
              </p>
            </div>

            <div className="grid gap-6">
              <div>
                <Label className="mb-3 block text-sm font-medium text-slate-200">
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
                <Label className="mb-3 block text-sm font-medium text-slate-200">
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

            <div className="mt-auto">
              <Button
                onClick={handleSubmit}
                className="w-full rounded-2xl py-6 text-base font-semibold"
              >
                Enviar a revisión
              </Button>
            </div>
          </div>

          {/* Panel derecho */}
          <div className="bg-slate-950">
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
        </div>
      </div>
    </div>
  );
}