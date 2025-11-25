"use client";

import { createContext, useState, useEffect, type ReactNode } from "react";
import type { User, AuthContextType } from "@/lib/types";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("authUser");
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    setIsLoading(true);

    const res = await fetch("https://45de21518454.ngrok-free.app/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      setIsLoading(false);
      throw new Error("Invalid username or password");
    }

    const data = await res.json();

    setUser(data.user);
    localStorage.setItem("authUser", JSON.stringify(data.user));

    setIsLoading(false);
  };

  const register = async (username: string, password: string, name: string) => {
    setIsLoading(true);

    const res = await fetch("https://45de21518454.ngrok-free.app/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, name , role : "user" }),
    });

    if (!res.ok) {
      setIsLoading(false);
      const msg = await res.text();
      throw new Error(msg || "Failed to register");
    }

    const data = await res.json();

    setUser(data.user);
    localStorage.setItem("authUser", JSON.stringify(data.user));

    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
      <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
        {children}
      </AuthContext.Provider>
  );
}
