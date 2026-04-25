import { cn } from "../../lib/utils"

export function Button({ className, variant = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors px-4 py-2"

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  }

  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    />
  )
}