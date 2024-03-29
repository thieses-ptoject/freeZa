import { createContext, useContext, useEffect, useState } from "react";
import {
  getProducts,
  getCategories,
  filterProducts,
  getTypes,
  getUser,
} from "../React-query/homeProducts/products";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [phone, setPhone] = useState("26251053");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  var { data: products, isLoading, isError } = getProducts();
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1svffVj7poxJxBjyZpyx_7Wh9xfT6AQaEArPXOHuH9fetQ3XKjP4WVWrIV7f0hBibN3U&usqp=CAU"
  );
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [id, setId] = useState("");
  const [user, setUser] = useState({});
  const [otherView, setOtherView] = useState(false);
  const [view, setView] = useState(false);
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState(users);

  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoryError,
  } = getCategories();
  const {
    data: userData,
    isLoading: userLoading,
    isError: userDataError,
  } = getUser();

  const value = {
    categories,
    categoriesLoading,
    categoryError,
    auth,
    setAuth,
    user,
    setUser,
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
    setIsAuthenticated,
    otherView,
    view,
    setOtherView,
    setView,
    users,
    setUsers,
    allUsers,
    setAllUsers,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
