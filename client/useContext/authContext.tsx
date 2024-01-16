  import { createContext, useContext, useState } from "react";
  import {getProducts, getCategories, filterProducts, getTypes} from  "../React-query/homeProducts/products"

  export const AuthContext = createContext<any>(null);

  export const AuthProvider = ({ children }: any) => {
      const [auth, setAuth] = useState<boolean>(false);
      const [phone, setPhone] = useState("26251053")
      const [email, setEmail] = useState("")
      const [name, setName] = useState("");
      const [LastName, setLastName] = useState("");
      var { data: products, isLoading, isError } = getProducts();
      const [image, setImage] = useState("")
      const [filteredProducts, setFilteredProducts] = useState(products);
      const {data:categories , isLoading: categoriesLoading, isError: categoryError} = getCategories()

      

    
      
    const value = {
      categories,
      categoriesLoading,
      categoryError,
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
      isError,
      filteredProducts,
      setFilteredProducts,
      
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };
