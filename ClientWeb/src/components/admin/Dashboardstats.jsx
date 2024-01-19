import React, { useState,useEffect } from 'react'
import { IoBagCheckOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6"
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import axios from 'axios'
import config from "../../../../client/config.json"


 const Dashboardstats = () => { 
    const [users,setUsers]=useState([])
    const [products,setProducts]=useState([])
const Users= async ()=>{
    try { 
    
       const response = await axios.get(`http://${config.ip}:3001/user`)
       setUsers(response.data) 
        
    } catch (error) {
        console.log(error)
    }

    } 
    const Products= async()=>{ 
        try {
           const response = await axios.get(`http://${config.ip}:3001/item`) 
           setProducts(response.data)
           console.log(users)
        } catch (error) {
            console.log(error)
            
        }

    } 
    useEffect(() => {
        Users ();
        Products()
      }, []); 
      



    
  return (
    <div className='flex     gap-6 w-full ml-3 mt-40  bg-black '>
       
   <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
    <div className='rounded-full h-12 w-12 flex     items-center justify-center bg-pink-300'>
        <IoBagCheckOutline className='text-2xl text-white'/>   
    </div>
    <div className=' flex flex-col ml-4'>
            <span className='text-sm text-gray-500 font-light'>Total of Products</span>
            <span>{products.length}</span>
        </div> 
   </div>
   <div className='bg-white rounded-sm  p-4 flex-1 border border-gray-200 flex items-center'>
   <div className='rounded-full h-12 w-12 flex items-center justify-center bg-red-600'>
        <FaUsers className='text-2xl text-white'/>
    </div> 
    <div className=' flex flex-col ml-4'>
            <span className='text-sm text-gray-500 font-light'>Total of Customers</span>
            <span>{users.length}</span>
        </div>
   </div>
   <div className='bg-white rounded-sm  p-4 flex-1 border border-gray-200 flex items-center'>
    <div className='rounded-full h-12 w-12 flex items-center justify-center bg-lime-600'>
        <IoCheckmarkDoneCircleSharp className='text-2xl text-white'/>
    </div> 
    <div className=' flex flex-col ml-4'>
            <span className='text-sm text-gray-500 font-light'>Total of Donations</span>
            <span>0</span>
        </div>
    </div>

    </div>
  )
}
export default Dashboardstats 
 
