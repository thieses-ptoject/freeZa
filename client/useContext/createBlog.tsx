import { createContext, useContext, useState } from "react";

export const ContextPost = createContext<any>(null);

export const ProviderPost = ({ children }: any) => {
   const [addpost,setAddPost]=useState(false)
    
  const value = {
   addpost,
   setAddPost
  };

  return <ContextPost.Provider value={value}>{children}</ContextPost.Provider>;
};
