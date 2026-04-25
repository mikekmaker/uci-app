import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";

export default function LoginForm() {
  const { mutate, isPending, error } = useLogin();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    mutate(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Login</h1>

      <div>
        <Label>Username</Label>
        <Input
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />
      </div>

      <div>
        <Label>Password</Label>
        <Input
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error.response?.data?.detail || "Error"}
        </p>
      )}

      <Button type="submit" disabled={isPending}>
        {isPending ? "Entrando..." : "Entrar"}
      </Button>
    </form>
  );
}