import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'
export default function Left() {
    return (
        <div className="w-[30%] bg-black text-gray-300 flex-col h-full">
            <div className="flex-none">
                <Search />
            </div>

            <div className="flex-grow overflow-y-auto">
                <Users />
            </div>
            <div className="flex-none">
                <Logout />
            </div>
        </div>
    )
}