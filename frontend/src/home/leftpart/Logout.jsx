import axios from 'axios';
import React, { useState } from 'react'
import { RiLogoutCircleRLine } from "react-icons/ri";
import Cookies from 'js-cookie'
export default function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async() => {
    setLoading(true);
    try {
      
       await axios.post('http://localhost:3000/user/logout');
      localStorage.removeItem("jwt");
      Cookies.remove("jwt");
      window.location.reload();
      alert("Logout successfully...")
      
    } catch (error) {
      console.log("error in logout", error)
      alert("Logout failed, please try again.");
    }
    finally{
      setLoading(false)

    }


  };
  return (
    <div className='px-6 py-2 bg-slate-900 hover:bg-slate-700 duration-300 cursor-pointer'>
      <button className='flex items-center space-x-3'>
        <RiLogoutCircleRLine className='text-2xl' />
        <span onClick={handleLogout}>Logout</span>
      </button>
    </div>
  )
}