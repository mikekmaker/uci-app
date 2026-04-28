import AuditForm from "../components/audit/AuditForm"
export default function Editor() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        Editor AI CRP
      </h1>      
      <AuditForm/>
    </div>
  );
}