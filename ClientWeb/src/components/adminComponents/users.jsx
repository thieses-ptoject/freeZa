import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import config from "../../../../client/config.json";
import { MdDelete } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { MdBlockFlipped } from "react-icons/md";
import { AuthContext } from "../../useContext/adminContext";

const Users = () => {
  const { data, setData } = useContext(AuthContext);
  const { filtredUsers, setFiltredUsers } = useContext(AuthContext);
  console.log(setData, "jqskljdksqd");
  const fetchAllUsers = async () => {
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
      const response = await axios.delete(
        `http://${config.ip}:3001/user/deleteUser/${id}`
      );
      fetchAllUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="  pt-3 pb-4 rounded-sm border border-gray-200  ml-4 mr-4 overflow-y-auto ">
      <strong className="text-lime-700 font-medium text-center">
        All Customers
      </strong>
      <div className="border-x border-red-100 rounded-sm mt-3">
        <table className="w-full ">
          <thead>
            <tr className="text-red-500 bg-red-100">
              <th>ID</th>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>Block</th>
              <th>Delete</th>
              <th>Messages</th>
            </tr>
          </thead>
          <tbody>
            {filtredUsers.map((user, i) => (
              <tr key={user.id} className="border-b border-red-100 shadow-sm">
                <td className="text-center text-lime-600"># {i}</td>
                <td className="text-center">{user.firstName}</td>
                <td className="text-center">{user.lastName}</td>
                <td className="text-center">{user.email}</td>
                <td>
                  <div className="flex items-center justify-center">
                    <MdBlockFlipped className="text-xl text-red-600" />
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <MdDelete
                      className="text-xl text-red-600"
                      onClick={() => DeleteUser(user.id)}
                    />
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <FaMessage className="text-l text-red-600" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Users;
