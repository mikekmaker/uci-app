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
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto w-full max-w-7xl rounded-3xl bg-white shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
          
          {/* Panel izquierdo */}
          <div className="p-8 border-r border-slate-200 flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Auditoría de Código
              </h1>
              <p className="text-sm text-slate-500 mt-2">
                Selecciona el lenguaje, el tipo de análisis y envía el código
                para revisión estática.
              </p>
            </div>

            <div className="grid gap-5">
              <div>
                <Label className="mb-2 block">Lenguaje</Label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-500"
                >
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                  <option value="csharp">C#</option>
                  <option value="javascript">JavaScript</option>
                  <option value="kotlin">Kotlin</option>
                </select>
              </div>

              <div>
                <Label className="mb-2 block">Tipo de análisis</Label>
                <select
                  value={analysisType}
                  onChange={(e) => setAnalysisType(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-500"
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
                className="w-full rounded-xl py-6 text-base font-semibold"
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