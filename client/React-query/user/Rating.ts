import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Mutation } from "react-query";

import config from "../../config.json"



export const getallraters = (ratedId:any) => {
  const query = useQuery<Rate[]>({
    queryKey: ["rate"],
    queryFn: async () => {
        const response = await axios.get(`http://${config.ip}:3001/rate/getraters/${ratedId}`);
        return response.data; 
    },
  });
  return query;
};