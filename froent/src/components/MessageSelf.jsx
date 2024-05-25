import React from 'react'
import '../index.css'
export default function MessageSelf() {
  var props = {name: "RandomUser", message: "This is msg From me", }
  return (
    <div className="flex justify-end">
      <div className="flex flex-col bg-[#63d7b0] w-max px-[10px] py-[10px] m-[5px] rounded-[20px] font">
        <p>{props.message}</p>
        <p className="self-end font-[0.75rem] *:">12:00am</p>
      </div>
    </div>
  )
}
