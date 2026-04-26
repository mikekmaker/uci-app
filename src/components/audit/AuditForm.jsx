import Editor, {DiffEditor, useMonaco, loader } from "@monaco-editor/react";

export default function AuditForm() {
    return (
        
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">            
             <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <Editor
                height="90vh"
                theme="vs-dark"
                defaultLanguage="java"
                defaultValue="let suma = 0; // Variable para guardar el resultado

                for (let i = 1; i <= 5; i++) {
                    suma += i; // Suma el valor actual de 'i' a la variable 'suma'
                }

                console.log(suma); // El resultado será 15
                "
            /> 
            </div> 
        </div>     
    )
    
}