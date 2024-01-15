import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import axios from 'axios';
import config from "../../config.json"

export const  getProducts= () => {
 
    const query = useQuery<Products[]>({
      queryKey: ["Products"],
      queryFn: async () => {
  
          const response = await axios.get(`http://${config.ip}:3001/item/`);
  
  
          return response.data; 
      },
    });
    return query;
  };

  export const filterProducts = () => {
    const queryClient = useQueryClient();
    const query = useMutation({
      mutationKey: ["Products"],
      mutationFn: async (id: number) =>{
        await axios.get(`http://${config.ip}:3001/item/category/${id}` )
      },

      onSuccess: (data) => {
        console.log('done') 
        queryClient.invalidateQueries({ queryKey: ['Products'] });
      },
      onError:(err)=>{console.log(err)}
  
    });
    return query;
  };