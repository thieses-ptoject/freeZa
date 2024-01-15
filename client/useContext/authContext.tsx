import { createContext, useContext, useState } from "react";
import {getProducts} from  "../React-query/homeProducts/products"
export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = useState<boolean>(false);
    const [phone, setPhone] = useState("26251053")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("");
    const [LastName, setLastName] = useState("");
    const { data: products, isLoading, isError } = getProducts();

    const [image, setImage] = useState("")
    console.log(products, "products");
    
    
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
    setImage,
    products,
    isLoading,
    isError

  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
