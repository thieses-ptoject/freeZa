import { useMutation, useQuery } from '@tanstack/react-query';

import axios from 'axios';
import config from "../../config.json"
const expoPublicIp = process.env.Expo_PUBLIC_ip;

export const  getAllMessage=(id:string) => {
  
  
    const query = useQuery({
      queryKey: ["AllMessageClaims"],
      queryFn: async () => {
        const result = await axios.get(
          `http://${config.ip}:3001/claims/1/${id}`
        );
        return result.data;
      },
    });
    return query;
  };
  
  export const addMessageClaim = () => {
    const query = useMutation({
      mutationKey: ["addClaim"],
      mutationFn: async (object: {  userid:string,claim:string}) =>{
       console.log(object)
        await axios.post(`http://${config.ip}:3001/claims/new/1/${object.userid}`, 
           {claim:object.claim}
        )
       
      },

      onSuccess: (data) => {
        console.log('done') 
      },
      onError:(err)=>{console.log(err)}
  
    });
    return query;
  };