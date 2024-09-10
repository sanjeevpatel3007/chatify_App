import React from 'react'

export default function Chatuser() {
  return (
    <div>
       <div className='flex h-[8vh]  space-x-3  py-1  hover:bg-slate-700 bg-slate-800 duration-300 items-center justify-center  cursor-pointer'>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>

                <div>
                    <h1 className='font-bold'>Akhil</h1>
                    <span>offline</span>
                </div>

            </div>
    </div>
  )
}
