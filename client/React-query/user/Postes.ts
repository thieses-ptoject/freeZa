import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import config from "../../config.json"


export const getOnePostComm = (postId:number) => {
  const query = useQuery<comments[]>({
    queryKey: ["comments"],
    queryFn: async () => {
        const response = await axios.get(`http://${config.ip}:3001/comment/getallFulluser/${postId}`);
        return response.data; 
    },
  });
  return query;
};





export const getOnePostLikes = (postId:number) => {
    const query = useQuery<like[]>({
      queryKey: ["like"],
      queryFn: async () => {
          const response = await axios.get(`http://${config.ip}:3001/like/postalllikes/${postId}`);
          return response.data; 
      },
    });
    return query;
  };