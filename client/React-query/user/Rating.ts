import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import config from "../../config.json"



export const getallraters = (ratedId:string) => {
  const query = useQuery<Rate[]>({
    queryKey: ["rate"],
    queryFn: async () => {
        const response = await axios.get(`http://${config.ip}:3001/rate/getraters/${ratedId}`);
        return response.data; 
    },
  });
  return query;
};


export const Rating = (raterId:string) => {
  const query = useMutation({
    mutationKey: ["rate"],
    mutationFn: async (object: {
      nbrOfStars: number;
      comments: string,
      ratedId: string,
    })  => {
      const res: any = await axios.post(
        `http://${config.ip}:3001/rate/${raterId}` , object 
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