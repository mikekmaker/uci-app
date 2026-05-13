import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: localStorage.getItem("token"),
  user: localStorage.getItem("user"),

  setToken: (token) => {
    localStorage.setItem("token", token);
    set({ token });
  },

  setUser: (user) => {
    localStorage.setItem("user", user);
    set({ user });
  },
    

  logout: () => {
    localStorage.removeItem("token");
    set({ token: null, user: null });
  },
}));