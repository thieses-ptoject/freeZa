import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Mutation } from "react-query";

import config from "../../config.json"




export const GiversIFollowed = (id:string) => {
  const query = useQuery<GiversFollowed[]>({
    queryKey: ["GiversFollowed", id],
    queryFn: async () => {
      const response = await axios.get(`http://${config.ip}:3001/followers/follower/${id}`);
      return response.data; 
    },
  });
  return query;
 };
 

 export const GiversFollowedMe = (id:string) => {
  const query = useQuery<GiversFollowed[]>({
    queryKey: ["aaaaaaaaaaaaaaaaa", 1],
    queryFn: async () => {
      const response = await axios.get(`http://${config.ip}:3001/followers/followed/${id}`);
      return response.data; 
    },
  });
  return query;
 };

 export const getFollows = (followerId: string, followedId: string) => {
  const query = useQuery<GiversFollowed[]>({
    queryKey: ["GiversFollowed"],
    queryFn: async () => {
      const response = await axios.get(`http://${config.ip}:3001/followers/${followerId}/${followedId}`);
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
        `http://${config.ip}:3001/followers/del/${input}`  
      )
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return query;
};


export const followUnfollower = () => {
  const query = useMutation({
    mutationKey: ["GiversFollowed"],
    mutationFn: async (object: {
      followerId: string;
      followedId: string,
    })  => {
      const res: any = await axios.post(
        `http://${config.ip}:3001/followers/add` , object 
        )
        console.log(object,":object")
      return  res.data;
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return query;
};