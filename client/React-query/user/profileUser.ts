import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Mutation } from "react-query";





export const getUserData = () => {
  const query = useQuery<User[]>({
    queryKey: ["user"],
    queryFn: async () => {
        const response = await axios.get("http://172.29.0.33:3001/user/wided@gmail.com");
        return response.data; 
    },
  });

  return query;
};