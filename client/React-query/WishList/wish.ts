import {useMutation,useQuery} from '@tanstack/react-query'
import axios from 'axios'
import config from '../../config.json'

export const Getfavorite=(userId:string)=>{
    const query=useQuery({
        queryKey:["WishList",userId],
        queryFn: async()=>{
            console.log(userId,'llllll');
            
            const result= await axios.get(`http://${config.ip}:3001/favorite/${userId}`)
            return result.data
        } 
    })
    return query 
} 
export const AddToFav=()=>{
    const query=useMutation({
        mutationKey:["AddToFav"],
        mutationFn: async(object:{userId:string,itemId:number})=>{
            await axios.post(`http://${config.ip}:3001/favorite/add/${object.userId}/${object.itemId}`)
        },
        onSuccess: (data) => {
            console.log('done') 
          },
          onError:(err)=>{console.log(err)}

    }) 
    return query 
} 
export const deleteFav=()=>{
    const query= useMutation({
        mutationKey:["deleteFav"],
        mutationFn: async(object:{userId:string,itemId:number})=>{
            await axios.delete(`http://${config.ip}:3001/favorite/delete/${object.userId}/${object.itemId}`)
        },
        onSuccess: (data) => {
        console.log(data) 
    },
    onError:(err)=>{console.log(err)}
    })
   
    return query 
}