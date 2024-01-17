import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import axios from "axios";
import config from "../../config.json";
import { log } from "console";

export const getProducts = () => {
  const query = useQuery<Products[]>({
    queryKey: ["Products"],
    queryFn: async () => {
      const response = await axios.get(`http://${config.ip}:3001/item`);

      console.log("fetched : dat");
      return response.data;
    },
  });
  return query;
};

export const filterProducts = () => {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationKey: ["Products"],
    mutationFn: async (id: number) => {
      await axios.get(`http://${config.ip}:3001/item/category/${id}`);
    },

    onSuccess: (data) => {
      console.log("done");
      queryClient.invalidateQueries({ queryKey: ["Products"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return query;
};
export const getTypes = (categoryId: any) => {
  const query = useQuery<Types[]>({
    queryKey: ["Types", categoryId],
    queryFn: async () => {
      const response = await axios.get(
        `http://${config.ip}:3001/type/${categoryId}`
      );

      console.log("fetched : data");
      return response.data;
    },
  });
  return query;
};
export const getCategories = () => {
  const query = useQuery<Category[]>({
    queryKey: ["Category"],
    queryFn: async () => {
      const response = await axios.get(`http://${config.ip}:3001/category/`);

      console.log("fetched : data");
      return response.data;
    },
  });
  return query;
};
