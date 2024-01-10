import { createContext, useContext, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = useState<boolean>(false);
    const [phone, setPhone] = useState("26251053")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("");
    const [LastName, setLastName] = useState("");
    const [image, setImage] = useState("")
    
  const value = {
    auth,
    setAuth,
    phone,
    setPhone,
    email,
    setEmail,
    name,
    setName,
    LastName,
    setLastName,
    image,
    setImage
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
