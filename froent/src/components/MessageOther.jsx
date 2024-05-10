import React from 'react'
import '../index.css';

export default function MessageOther() {
    var props = {name: "RandomUser", message: "This is msg From Random User", }
  return (
    <div>
      <div>
        <p className="flex justify-center items-center bg-[#d9d9d9] font-bold h-[32px] w-[32px] p-[2px] grid-area-custom">{props.name[0]}</p>
        <p className="con-title">{props.name}</p>
        <p className="con-lastmessage">{props.message}</p>
        <p className="self-timestamp">12:00am</p>
      </div>
    </div>
  )
}
