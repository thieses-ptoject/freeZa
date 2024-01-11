import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Mutation } from "react-query";





export const getUserData = () => {
  const query = useQuery<User[]>({
    queryKey: ["user"],
    queryFn: async () => {

        const response = await axios.get("http://172.29.0.78:3001/user/wided@gmail.com");


        return response.data; 
    },
  });
  return query;
};


export const updateprofile = () => {
  const query = useMutation({
    mutationKey: ["user"],
    mutationFn: async (object: {
      firstName: string;
      lastName: string;
      image: string[];
      address: string;
      phone: number;
    })  => {
      const res: any = await axios.put("http://172.29.0.78:3001/user/updateUser/wided@gmail.com", object)
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return query;
};