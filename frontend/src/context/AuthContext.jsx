import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

/**
 * Auth Provider
 */
export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  /**
   * Load user from localStorage
   */
  useEffect(() => {

    const savedUser = localStorage.getItem("user");

    if (savedUser) {

      setUser(JSON.parse(savedUser));

    }

  }, []);

  /**
   * Login
   */
  const login = (userData, jwtToken) => {

    setUser(userData);

    setToken(jwtToken);

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    localStorage.setItem(
      "token",
      jwtToken
    );

  };

  /**
   * Logout
   */
  const logout = () => {

    setUser(null);

    setToken(null);

    localStorage.removeItem("user");

    localStorage.removeItem("token");

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

};

/**
 * Custom Hook
 */
export const useAuth = () => {

  return useContext(AuthContext);

};