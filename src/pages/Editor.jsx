import AuditForm from "../components/audit/AuditForm"
export default function Editor() {
  return (
    <div className=" bg-slate-950 text-white flex flex-col gap-4">
      <h1 className="text-4xl md:text-5xl font-bold">
        Editor AI CRP
      </h1>      
      <AuditForm/>
    </div>
  );
}