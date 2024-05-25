import React from 'react'
import '../index.css';

export default function MessageOther() {
    var props = {name: "RandomUser", message: "This is msg From Random User", }
  return (
    <div className="">
      <div className="">
        <p className="flex justify-center items-center bg-[#d9d9d9] font-bold h-[32px] w-[32px] p-[2px] grid-area-custom">{props.name[0]}</p>
        <div className="bg-[#d9d9d9] px-[10px] py-[10px] m-[5px] rounded-[20px] w-max mt-[10px] flex flex-col ">
        <p className="con-title">{props.name}</p>
        <p className="con-lastmessage">{props.message}</p>
        <p className="self-timestamp">12:00am</p>
        </div>
       
      </div>
    </div>
  )
}
