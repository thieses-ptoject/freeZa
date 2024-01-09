import { createContext, useContext, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = useState<boolean>(false);
    
  const value = {
    auth,
    setAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
