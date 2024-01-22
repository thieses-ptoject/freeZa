import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import config from "../../config.json"



export const getOneUserData = (id:any) => {
  const query = useQuery<User[]>({
    queryKey: ["user"],
    queryFn: async () => {
        const response = await axios.get(`http://${config.ip}:3001/user/getuser/${id}`);
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
      const res: any = await axios.put(`http://${config.ip}:3001/user/updateUser/wided@gmail.com`, object)
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return query;
};