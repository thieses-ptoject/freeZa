import { useMutation , useQueryClient} from 'react-query';
import axios from "axios";
import config from "../../config.json"


//  export const createPaymentIntent =(data:any)=>{
//     const query= useMutation({
//         mutationFn:async () => { 
//             const response = await fetch('/payments/intents', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//                 // Add any additional headers needed, like authentication headers
//               },
//               body: JSON.stringify(data), 
//             }); 
//           console.log(data)
          
//             if (!response.ok) {
//               // Handle error scenarios if needed
//               throw new Error('Failed to create payment intent');
//             }
          
//             return response.json();
//           },
//           mutationKey:['payment']
//      })
//      return query
//  } 
 export const Updateacc= (id:string)=>{
    const query= useMutation({
        mutationKey:['premium'],
        mutationFn:async()=>{
            await axios.put(`http://${config.ip}:3001/user/premium/${id}`)
        },
        onError:(error:any)=>{
            console.log(error.message)
        },
        
    })
    return query 
} 
 export const Addfreeza= (id:string)=>{ 
    const query = useMutation({
        mutationKey:["user"],
        mutationFn: async(object:{
            strawberries:5
        })=>{
            const response= await axios.put(`http://${config.ip}:3001/user/addFreeza/${id}`)
        },
        onError:(error)=>{
            console.log(error)
        },
    })
    return query 
}
 




