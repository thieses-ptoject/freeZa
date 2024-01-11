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
       

    