import { useMutation, useQuery } from '@tanstack/react-query';

import axios from 'axios';
import config from "../../config.json"
import { log } from 'console';

export const  getProducts= () => {
 
    const query = useQuery<Products[]>({
      queryKey: ["Products"],
      queryFn: async () => {
  
          const response = await axios.get(`http://${config.ip}:3001/item`);
  
          console.log('fetched : dat')
          return response.data; 
      },
    });
    return query;
  }; 