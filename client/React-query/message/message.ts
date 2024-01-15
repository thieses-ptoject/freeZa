import { useMutation, useQuery } from '@tanstack/react-query';

import axios from 'axios';
import config from "../../config.json"
export const  getMessages=(userId:string) => {
    const query = useQuery({
      queryKey: ["messages"],
      queryFn: async () => {
        const result = await axios.get(
          `http://${config.ip}:3001/message/${userId}`
        );
        return result.data;
      },
    });
    return query;
  };
  export const  getonediscution=(userId:string,senderId:string) => {
    const query = useQuery({
      queryKey: ["onediscution"],
      queryFn: async () => {
        const result = await axios.get(
          `http://${config.ip}:3001/message/${userId}/${senderId}`
        );
        return result.data;
      },
    });
    return query;
  };


  export const addmessage = () => {
    const query = useMutation({
      mutationKey: ["addMessage"],
      mutationFn: async (object: {senderId:string,recieverId:string,message:string }) =>{
        await axios.post(`http://${config.ip}:3001/message/add`, 
          {senderId:object.senderId,recieverId:object.recieverId}
        )
       
      },
      onSuccess: (data) => {
        console.log('done') 
      },
      onError:(err)=>{console.log(err)}
  
    });
    return query;
  };