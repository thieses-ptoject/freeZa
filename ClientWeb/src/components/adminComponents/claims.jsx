import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../client/config.json';
import { MdClose } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

const Claims = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const [claims, setClaims] = useState([]); 
  const[sender,setSender]=useState([])
  

  useEffect(() => {
    const fetchClaims = async () => {
      console.log(id);
      try { 
        const userResponse = await axios.get(`http://localhost:3001/user/getuser/${id}`);
        setSender(userResponse.data);
        const response = await axios.get(`http://localhost:3001/claims/1/${id}`);
        console.log(response);
        setClaims(response.data);
      } catch (error) {
        console.error('Error fetching claims:', error);
      }
    };

    fetchClaims();
  }, [id]); 
  const CloseClaims =()=>{
    navigate(`/users`)
    
  }
console.log(claims);
  return (
    <div className='pt-3 pb-4 rounded-sm border border-gray-200  ml-4 mr-4 overflow-y-auto '>
      <div className='flex flex-row justify-between'>
      <strong className="text-lime-700 font-medium text-center">{sender.firstName} {sender.lastName} Claims</strong> 
      <div className='border border-x bg-red-500 flex items-center mr-2  rounded-md'>
      <MdClose className='text-white text-2xl' onClick={()=>CloseClaims()}/>
      </div> 
      </div>
      <div className="border-x border-red-100 rounded-sm mt-3">
      <table className="w-full ">
      <thead >
						<tr className='text-red-500 bg-red-100'>
							<th>ID</th>
              {/* <th>First</th>
              <th>Last</th> */}
							<th >Claim</th>
							<th >Date</th>
						</tr>
					</thead> 
          <tbody className='bg-lime-100'>
            {claims.map((claim,i)=>(
              <tr key={claim.id} className='"border-b border-red-200 shadow-sm '> 
              <td className='text-center text-lime-600'>{i}</td>
              {/* <td className='text-center '>first</td>
              <td className='text-center '>last </td> */}
              <td className='text-center '>{claim.claim}</td>
              <td className='text-center  text-gray-500'>{moment(claim.createdAt).format("MMM Do YY")}</td>
              </tr>

            ))}
          </tbody>


      </table>

      </div>



    </div>
  );
};

export default Claims;

