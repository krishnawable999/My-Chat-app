import React from 'react'
import '../index.css'
import { useNavigate } from 'react-router-dom'

export default function ConversationItem({props}) {
  const navigate = useNavigate();
  return (
    <div className="grid gap-[10px] p-[5px] m-[5px] rounded-[20px] grid-cols-1 md:grid-cols-[32px,auto,auto] overflow-y-auto shadow transition conversation-container" onClick={()=>{navigate('chat')}}>
      <p className="flex justify-center items-center bg-[#d9d9d9] font-bold h-[32px] w-[32px] p-[2px] grid-area-custom ">{props.name[0]}</p>
      <p className="con-title">{props.name}</p>
      <p className="con-lastmessage">{props.lastmessage}</p>
      <p className="con-timestamp">{props.timeStamp}</p>
    </div>
  )
}
