import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Mutation } from "react-query";





export const getUserData = () => {
  const query = useQuery<User[]>({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const response = await axios.get("http://localhost:3001/user/wided@gmail.com");
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  });

  return query;
};