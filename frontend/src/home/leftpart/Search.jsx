import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Search() {
    return (
        <div className='px-6 py-2.5'>
            <form action="">
                <div className='flex space-x-3'>
                    <label className="input input-bordered border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2">
                        <input
                         type="text"
                          className="grow outline-none" 
                          placeholder="Search" />
                    </label>
                    <button>
                        <FaSearch  className='text-5xl p-2'/>
                    </button>
                </div>
            </form>
        </div>
    )
}