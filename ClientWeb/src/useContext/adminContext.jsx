import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);

export const AdminProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filtredUsers, setFiltredUsers] = useState(data);

  const value = {
    data,
    setData,
    filtredUsers,
    setFiltredUsers,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
