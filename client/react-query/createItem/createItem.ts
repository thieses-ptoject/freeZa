import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
export const  getCategory=() => {
    const query = useQuery({
      queryKey: ["AllCategory"],
      queryFn: async () => {
        const result = await axios.get(
          `http://172.29.0.59:3001/category/`
        );
        return result.data;
      },
    });
    return query;
  };