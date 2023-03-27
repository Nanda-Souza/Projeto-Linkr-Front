import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import apiAuth from "../services/apiAuth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const recoveredUser = localStorage.getItem("user");
  const recoveredToken = localStorage.getItem("tokenUser");
  const [user, setUser] = useState(JSON.parse(recoveredUser));
  const [token, setToken] = useState(JSON.parse(recoveredToken));
  const navigate = useNavigate();

  function login(data) {
    const { token } = data;

    apiAuth
      .getUser(token)
      .then((res) => {
        const loggedUser = res.data;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("tokenUser", JSON.stringify(token));

        setUser(loggedUser);
        setToken(token);
        navigate("/timeline");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log("Unauthorized");
          navigate("/");
        }
      });
  }

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("tokenUser");
    setUser(null);
    setToken(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        token,
        login,
        logout,
        setToken,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
