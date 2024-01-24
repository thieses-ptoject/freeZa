import React from "react";
import freeza from "../../assets/freeza.png";
import { MdDashboard } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="flex flex-col bg-red-200 w-60 p-3 h-screen overflow-y-auto">
      <div className="flex flex-row px-1 py-6 items-center">
        <div className="flex items-center gap-2 bg-pink-200 w-11 rounded-full align-middle justify-center shadow-2xl">
          <img src={freeza} alt="Freeza" />
        </div>
        <span className="text-lime-500 text-xl font-bold mt-2 ml-3">FreeZa</span>
      </div>
      <div className="flex-1">
        <div className='flex items-center gap-2 px-1 py-3'>
          <Link to="/dashboard">
            <MdDashboard fontSize={24} />
          </Link>
          <span>Dashboard</span>
        </div>
        <div className='flex items-center gap-2 px-1 py-3'>
          <Link to='/users'>
            <FaUsersGear fontSize={24}/>
          </Link>
          <span>Customers</span>
        </div>
        <div className='flex items-center gap-2 px-1 py-3'>
          <Link to='/category'>
            <MdCategory fontSize={24}/>
          </Link>
          <span>Categories</span>
        </div>
        <div className='flex items-center gap-2 px-1 py-3'>
          <Link to='/types'>
          <MdOutlineTypeSpecimen fontSize={24} />
          </Link>
          <span>Types</span>
        </div>
        <div className='flex items-center gap-2 px-1 py-3'>
          <Link to='/claims'>
            <BiSolidMessageSquareDetail fontSize={24} />
          </Link>
          <span>Claims</span>
        </div>
      </div>
      <div className="flex items-center gap-2 px-1 py-3 mt-auto">
        <Link to="/dashboard">
          <CiSettings fontSize={24} />
        </Link>
        <span>Settings</span>
      </div>
    </div>
  );
};
