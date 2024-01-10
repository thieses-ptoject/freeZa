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