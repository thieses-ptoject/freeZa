import { useMutation, useQuery } from '@tanstack/react-query';

import axios from 'axios';
import config from "../../config.json"

export const  getPosts=() => {
      const query = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
          const result = await axios.get(
            `http://${config.ip}:3001/post/getall`
          );
          return result.data;
        },
      });
      return query;
    };
    export const  getUser=(id:string) => {
        const query = useQuery({
          queryKey: ["user",id],
          queryFn: async () => {
            const result = await axios.get(
              `http://${config.ip}:3001/user/getuser/${id}`
            );
            return result.data;
          },
        });
        return query;
      };
      export const addPost = () => {
        const query = useMutation({
          mutationKey: ["addPost"],
          mutationFn: async (object: { image:string|null,body:string|null,id:string  }) =>{
            await axios.post(`http://${config.ip}:3001/post/addpost/${object.id}`, 
              {image:object.image,body:object.body}
            )
            console.log('fffffffffffffffffff')
          },
    
          onSuccess: (data) => {
            console.log('done') 
          },
          onError:(err)=>{console.log(err)}
      
        });
        return query;
      };
      export const  getcomment=(id:string) => {
        const query = useQuery({
          queryKey: ["comment",id],
          queryFn: async () => {
            const result = await axios.get(
              `http://${config.ip}:3001/comment/getall/${id}`
            );
            return result.data;
          },
        });
        return query;
      };    
      export const  getlike=(id:number) => {
        const query = useQuery({
          queryKey: ["like",id],
          queryFn: async () => {
            const result = await axios.get(
              `http://${config.ip}:3001/like/postlikes/1/${id}`
            );
            return result.data;
          },
        });
        return query;
      }; 
      export const addLike = () => {
        const query = useMutation({
          mutationKey: ["addlike"],
          mutationFn: async (object: { postId:number|null,userId:number }) =>{
            await axios.post(`http://${config.ip}:3001/like/1`, 
              {postId:object.postId}
            )
            console.log('fffffffffffffffffff')
          },
    
          onSuccess: (data) => {
            console.log('done') 
          },
          onError:(err)=>{console.log(err)}
      
        });
        return query;
      };