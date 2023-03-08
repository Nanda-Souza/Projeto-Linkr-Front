import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import apiAuth from "../services/apiAuth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  console.log("entrei no provider");

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const recoveredToken = localStorage.getItem("tokenUser");

    if (recoveredUser && recoveredToken) {
      setUser(JSON.parse(recoveredUser));
      setToken(JSON.parse(recoveredToken));
    }

    setLoading(false);
  }, []);

  const login = (data) => {
    const { token } = data;

    apiAuth
      .getUser(token)
      .then((res) => {
        const loggedUser = res.data;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("tokenUser", JSON.stringify(token));

        console.log("token: ", token, "user: ", loggedUser);

        setUser(loggedUser);
        setToken(token);
        navigate("/timeline");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    console.log("Você saiu!");
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
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
