import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import API from "../api";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    try {
      const data = {
        email,
        password,
      };

      const response = await API.post("user/login", data);

      const { user, token } = response.data;

      API.defaults.headers.common.Authorization = `Bearer ${token}`;

      await AsyncStorage.setItem("Auth.user", JSON.stringify(user));
      await AsyncStorage.setItem("Auth.token", token);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    setUser(null);
    await AsyncStorage.removeItem("Auth.user");
    await AsyncStorage.removeItem("Auth.token");
  }

  useEffect(() => {
    async function loadStorage() {
      const userStorage = await AsyncStorage.getItem("Auth.user");
      const tokenStorage = await AsyncStorage.getItem("Auth.token");
      if (userStorage && tokenStorage) {
        API.defaults.headers.common.Authorization = `Bearer ${tokenStorage}`;
        setUser(JSON.parse(userStorage));
      }
    }
    loadStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ login, user, logout, isLogged: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
