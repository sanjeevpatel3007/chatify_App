import React from 'react'
import Chatuser from './Chatuser';
import Messages from './Messages';
import Typesend from './Typesend';

function Right() {
  return (
    <div className="w-[70%] bg-slate-600 text-gray-300 flex flex-col h-full relative">
    <div className="flex-none h-[8vh]">
      <Chatuser />
    </div>

    <div className="flex-grow overflow-y-auto hide-scrollbar" style={{ maxHeight: "calc(100vh - 16vh)" }}>
      <Messages />
    </div>

    <div className="flex-none h-[8vh]">
      <Typesend />
    </div>
  </div>
  )
}

export default Right;