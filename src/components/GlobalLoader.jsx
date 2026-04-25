import { useLoadingStore } from "../store/loadingStore";

export const GlobalLoader = () => {
  const pending = useLoadingStore((s) => s.pending);

  if (pending === 0) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 z-50 animate-pulse" />
  );
};