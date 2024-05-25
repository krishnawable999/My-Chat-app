import React, { useState } from 'react'
import '../index.css'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOther from './MessageOther';
import MessageSelf from './MessageSelf';

export default function ChatArea() {
    const [conversations, setConversations] = useState([{
        name: "Test#1",
        lastMessage:"Last Message #1",
        timeStamp: "today"
    },
    {
        name: "Test#2",
        lastMessage:"Last Message #2",
        timeStamp: "today"
    },
    {
        name: "Test#2",
        lastMessage:"Last Message #3",
        timeStamp: "today"
    },
])

var props = conversations[0];
console.log(conversations[0])
  return (
    <div className="flex-[0.7] flex flex-col ">
        <div className="flex items-center gap-[10px] bg-white px-[10px] py-[10px] m-[10px] rounded-[20px] shadow0">
            <p className="flex justify-center items-center bg-[#d9d9d9] font-bold h-[32px] w-[32px] p-[2px] grid-area-custom">{props.name[0]}</p>
            <div className="flex flex-col justify-center flex-1">
                <p className="con-title">{props.name}</p>
                <p className="con-timeStamps">{props.timeStamp}</p>
            </div>
            <IconButton>
            <DeleteIcon/>
            </IconButton>

        </div>
        <div className="bg-white  px-[10px] py-[10px] m-[10px] rounded-[20px] flex-1 overflow-y-auto shadow0">
            <MessageOther/>
            <MessageSelf/>

            <MessageOther/>
            <MessageSelf/>

            <MessageOther/>
            <MessageSelf/>

            <MessageOther/>
            <MessageSelf/>
        </div>

        <div className="">
            <div className="bg-white px-[10px] py-[10px] m-[10px] rounded-[20px] flex justify-between shadow0">
                <input placeholder="Type a message" className="outline-0 border-none ml-[10px] text-lg text-custom-color"/>

                <IconButton>
                <SendIcon/>
                </IconButton>
            </div>
        </div>

        
      

    </div>
  )
}
