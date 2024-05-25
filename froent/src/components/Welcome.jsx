import React from 'react'
import logo from "../assets/live-chat.png"
import "../index.css"
export default function Welcome() {
  return (
    <div className="flex-[0.7] flex flex-col justify-center items-center gap-[20px] font col rounded-[20px] border-b-[5px] b-bottom ">
        <img src={logo} alt="logo" className="h-[20vw]" />
        <p className="">View and text directly to people present in the chat rooms.</p>
    </div>
  )
}
