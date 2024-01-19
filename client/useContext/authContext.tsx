  import { createContext, useContext, useEffect, useState } from "react";
  import {getProducts, getCategories, filterProducts, getTypes, getUser} from  "../React-query/homeProducts/products"

  export const AuthContext = createContext<any>(null);

  export const AuthProvider = ({ children }: any) => {
      const [auth, setAuth] = useState<boolean>(false);
      const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
      const [phone, setPhone] = useState("26251053")
      const [email, setEmail] = useState("")
      const [name, setName] = useState("");
      const [LastName, setLastName] = useState("");
      var { data: products, isLoading, isError } = getProducts();
      const [image, setImage] = useState("")
      const [filteredProducts, setFilteredProducts] = useState(products);
      const [id,setId]=useState('')
      const[user,setUser]=useState({})
      const {data:categories , isLoading: categoriesLoading, isError: categoryError} = getCategories()
      const {data: userData, isLoading: userLoading, isError: userDataError} = getUser()


      

    
      
    const value = {
      categories,
      categoriesLoading,
      categoryError,
      auth,
      setAuth,user,setUser,
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
      userData,
      isAuthenticated,
      setIsAuthenticated
      
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };
