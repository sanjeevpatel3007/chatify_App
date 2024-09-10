import React from 'react'
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function Logout() {
  return (
    <div className='px-6 py-2 bg-slate-900 hover:bg-slate-700 duration-300 cursor-pointer'>
      <button className='flex items-center space-x-3'>
        <RiLogoutCircleRLine className='text-2xl' />
        <span>Logout</span>
      </button>
    </div>
  )
}