import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import config from "../../config.json";

// export const GetOne = () => {

//     const query = useQuery<Products[]>({
//       queryKey: ["Products"],
//       queryFn: async () => {
//           const response = await axios.get(`http://${config.ip}:3001/item/one/1`);
//           return response.data;
//       },
//     });
//     return query;
//   };

export const GetUser = (ownerId: string) => {
  const query = useQuery<User[]>({
    queryKey: ["User", ownerId],
    queryFn: async () => {
      const response = await axios.get(
        `http://${config.ip}:3001/user/getuser/${ownerId}`
      );
      return response.data;
    },
  });
  return query;
};

export const addfavDeletFav = () => {
  const query = useMutation({
    mutationKey: ["WishList"],
    mutationFn: async (object: { itemId: number; userId: string }) => {
      const res: any = await axios.post(
        `http://${config.ip}:3001/favorite/addRemov`,
        object
      );
      console.log(object, ":object");
      return res.data;
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return query;
};

export const GetFav = (userId: string, itemId: number) => {
  const query = useQuery<WishList[]>({
    queryKey: ["WishList"],
    queryFn: async () => {
      const response = await axios.get(
        `http://${config.ip}:3001/favorite/${userId}/${itemId}`
      );
      return response.data;
    },
  });
  return query;
};
