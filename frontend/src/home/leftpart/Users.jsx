import React from 'react'
import User from './User'

export default function Users() {
    return (
        <div>
            <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md'>message</h1>


            <div className=' flex-1 hide-scrollbar overflow-y-auto' style={{ maxHeight: "calc(80vh)" }}>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>



        </div>
    )
}