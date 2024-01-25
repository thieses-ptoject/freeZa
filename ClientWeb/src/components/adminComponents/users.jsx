import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import config from "../../../../client/config.json";
import { MdDelete } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { MdBlockFlipped } from "react-icons/md";
// import Claims from './claims';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../useContext/adminContext";
import { getAuth } from "firebase/auth";

// import * as admin from 'firebase-admin';
// import serviceAccount from './path/to/serviceAccountKey.json'
// import { auth } from "../../firebase";
const Users = () => {  
  const { filtredUsers, setFiltredUsers } = useContext(AuthContext);
  const [data,setData]=useState([]) 
  const [count,setCount]=useState(0)
  const [unreadCounts, setUnreadCounts] = useState({});

  
  const auth = getAuth()
  console.log(auth.currentUser,':dddddddd')
 const navigate = useNavigate()

  const fetchAllUsers  = async () => {
    try {
      const response = await axios.get(`http://${config.ip}:3001/user/`);
      setData(response.data);
      setFiltredUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAllUsers();
    
  }, []);
  const DeleteUser = async (id) => {
    try {
       const response = await axios.delete(`http://${config.ip}:3001/user/deleteUser/${id}`);
       fetchAllUsers();
    } catch (error) {
       console.log(error);
    }
   }
   
  const blockUser= async(id)=>{
    try { 
      const response = await axios.put(`http://${config.ip}:3001/user/block/${id}`)
      console.log('user blocked successfully',response) 
      fetchAllUsers()
      
    } catch (error) {
      console.log(error)
      
    }
  }  
  const deblockUser= async(id)=>{
    try { 
      const response = await axios.get(`http://${config.ip}:3001/user/deblock/${id}`)
      console.log('user deblocked successfully',response) 
      fetchAllUsers()
      
    } catch (error) {
      console.log(error)
      
    }
  }
  const openClaims = (userId) => {
    // Use the navigate function to navigate to the Claims component with userId as a URL parameter
    navigate(`/claims/${userId}`);
  };

  // const countUnread =  async(id)=>{
  //   try {
  //     var response = await axios.get(`http://localhost:3001/claims/1/${id}`) 
  //     return response.data.length
  //   } catch (error) { 
  //     console.log(error)
  //     return 0  
  //   }
  // }
  useEffect(() => {
    const fetchAllUnreadCounts = async () => {
      const counts = {};
      for (let user of filtredUsers) {
        try {
          const response = await axios.get(`http://localhost:3001/claims/1/${user.id}`);
          counts[user.id] = response.data.length;
        } catch (error) {
          console.log(error);
          counts[user.id] = 0;
        }
      }
      setUnreadCounts(counts);
    };

    fetchAllUnreadCounts();
 }, [filtredUsers]);
  

  return (
    <div className="  pt-3 pb-4 rounded-sm border border-gray-200  ml-4 mr-4 overflow-y-auto ">
      <strong className="text-lime-700 font-medium text-center">
        All Customers
      </strong>
      <div className="border-x border-red-100 rounded-sm mt-3">
      <table className="w-full h-[40rem] ">
      <thead >
						<tr className='text-red-500 bg-red-100'>
							<th>ID</th>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>Block</th>
							<th >Delete</th>
							<th >Messages</th>
						</tr>
					</thead> 
          <tbody >
          {filtredUsers.map((user,i) => {
          return (
            <tr key={user.id} className="border-b border-red-100 shadow-sm"> 
            <td className='text-center text-lime-600'>{i}</td>
              <td className='text-center'>{user.firstName}</td>
              <td className='text-center'>{user.lastName}</td>
              <td className='text-center'>{user.email}</td> 
              <td> 
              <div  className='flex items-center justify-center'>
              {user.blocked ? (
                      <div className='text-red-600' onClick={()=>deblockUser(user.id)}>
                        Blocked
                      </div>
                    ) : (
                <MdBlockFlipped className='text-2xl  text-red-600' onClick={()=>blockUser(user.id)} />
                    )}
                </div>
              </td>
              <td> 
                <div className='flex items-center justify-center' >
                <MdDelete  className='text-2xl text-red-600' onClick={()=>{DeleteUser(user.id)}}/>
                </div>
              </td> 
              <td> 
              <div  className='flex items-center justify-center relative'>
                <FaMessage  className='text-xl text-red-600' onClick={()=>openClaims(user.id)} /> 

                <span className="absolute top-0 right-0 inline-flex items-center px-0.5 py-0.25 mb-6   mr-16 text-xs font-bold leading-none text-black bg-red-300 rounded-full">
 {unreadCounts[user.id]}
</span>                  </div>
              </td>
            </tr>
            )})}
          </tbody>
      </table>
      </div> 
    </div>
  );
};
export default Users;
