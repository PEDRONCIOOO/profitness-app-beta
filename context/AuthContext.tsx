// app/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // ✅ Estado para controlar carregamento

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await AsyncStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        await AsyncStorage.removeItem("user");
      }
      setUser(currentUser);
      setLoading(false); // ✅ Atualiza o estado de carregamento
    });

    return () => unsubscribe();
  }, []);

  // ✅ Função de Logout
  const logout = async () => {
    await signOut(auth);
    await AsyncStorage.removeItem("user"); // ✅ Remove usuário da memória local
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
