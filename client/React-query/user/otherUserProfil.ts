import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import config from "../../config.json"



export const UserItems = (ownerId:any) => {
  const query = useQuery<Item[]>({
    queryKey: ["items"],
    queryFn: async () => {
        const response = await axios.get(`http://${config.ip}:3001/item/getitem/${ownerId}`);
        console.log(response.data)
        return response.data; 
    },
  });
  return query;
};
export const UserItem = (ownerId:any) => {
  const query = useQuery<Item[]>({
    queryKey: ["items"],
    queryFn: async () => {
        const response = await axios.get(`http://${config.ip}:3001/item/getitems/${ownerId}`);
        console.log(response.data)
        return response.data; 
    },
  });
  return query;
};
export const UserPosts = (userId:any) => {
  const query = useQuery<Posts[]>({
    queryKey: ["posts"],
    queryFn: async () => {
        const response = await axios.get(`http://${config.ip}:3001/post/get/${userId}`);
        return response.data; 
    },
  });


  return query;
};

// export const updateprofile = () => {
//   const query = useMutation({
//     mutationKey: ["user"],
//     mutationFn: async (object: {
//       firstName: string;
//       lastName: string;
//       image: string[];
//       address: string;
//       phone: number;
//     })  => {
//       const res: any = await axios.put(`http://${config.ip}:3001/user/updateUser/wided@gmail.com`, object)
//     },
//     onError: (error) => {
//       console.log(error);
//     },
//   });
//   return query;
// };