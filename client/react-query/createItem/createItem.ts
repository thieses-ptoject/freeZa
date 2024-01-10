import { useMutation, useQuery } from '@tanstack/react-query';

import axios from 'axios';
import config from "../../config.json"
const expoPublicIp = process.env.Expo_PUBLIC_ip;

export const  getCategory=() => {
  
  console.log(config.ip,"5555env");
    const query = useQuery({
      queryKey: ["AllCategory"],
      queryFn: async () => {
        const result = await axios.get(
          `http://${config.ip}:3001/category/`
        );
        return result.data;
      },
    });
    return query;
  };
  export const  getType=(categoryId:number|null) => {
    const query = useQuery({
      queryKey: ["type"],
      queryFn: async () => {
        const result = await axios.get(
          `http://${config.ip}:3001/type/${categoryId}`
        );
        return result.data;
      },
    });
    return query;
  };
  export const addItem = () => {
    const query = useMutation({
      mutationKey: ["addItem"],
      mutationFn: async (object: {  obj:object }) =>{
        await axios.post(`http://${config.ip}:3001/item/add/1`, 
           object.obj,
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