import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Mutation } from "react-query";






export const GiversIFollowed = (id:string) => {
  const query = useQuery<GiversFollowed[]>({
    queryKey: ["GiversFollowed", id],
    queryFn: async () => {
      const response = await axios.get(`http://172.29.0.78:3001/followers/follower/${id}`);
      return response.data; 
    },
  });
  return query;
 };
 


export const DeleteFollower = () => {
  const query = useMutation({
    mutationKey: ["GiversFollowed"],
    mutationFn: async (input: string) => {
      const res: any = await axios.delete(
        `http://172.29.0.78:3001/followers/del/${input}`  
      )
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return query;
};