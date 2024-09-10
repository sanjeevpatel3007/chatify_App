import React from 'react'
import { IoMdSend } from "react-icons/io";

export default function Typesend() {
  return (
    <div className="absolute bottom-0 w-full"> 
      <div className='flex px-4 bg-slate-700'>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <button className="ml-2 p-2  text-white rounded-full outline-none focus:ring-0 focus:border-transparent">
          <IoMdSend  className='text-3xl'/>
        </button>
      </div>
    </div>
  )
}
