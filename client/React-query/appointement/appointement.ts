import { useMutation, useQuery } from '@tanstack/react-query';

import axios from 'axios';
import config from "../../config.json"


export const addappointement = () => {
    const query = useMutation({
      mutationKey: ["addapp"],
      mutationFn: async (object: { time:string, giverId:string, reciverId:string, ItemId:number, location:string }) =>{
       console.log(object)
        await axios.post(`http://${config.ip}:3001/appointment/`, 
          {
            time:object.time,
           giverId:object.giverId,
           reciverId:object.reciverId,
           ItemId:object.ItemId,
           location:object.location}
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
  export const  getApp=() => {
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