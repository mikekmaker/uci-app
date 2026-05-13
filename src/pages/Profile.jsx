import ProfileForm from "../components/auth/ProfileForm"
import HistorialForm from "../components/audit/HistorialForm";
export default function Profile() {
  return (
    <div className="flex flex-col gap-4 bg-slate-900/70 ">         
      <ProfileForm />
      <HistorialForm />
    </div>
  );
}