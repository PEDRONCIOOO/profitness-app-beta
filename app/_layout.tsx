import React from "react";
import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { View, ActivityIndicator } from "react-native";

function MainLayout() {
  const { user, loading } = useAuth(); // ✅ Pegamos `loading` para evitar transição errada

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ff6600" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          {/* Se autenticado, redireciona para a página principal (tabs) */}
          <Stack.Screen name="(tabs)" />
        </>
      ) : (
        <>
          {/* Se não autenticado, redireciona para a tela de Login/Registro */}
          <Stack.Screen name="auth" />
        </>
      )}
      {/* Página de erro caso a rota não seja encontrada */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}
