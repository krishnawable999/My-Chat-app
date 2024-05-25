import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { IconButton } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from './ConversationItem';
import { useNavigate } from 'react-router-dom';



export default function Sideabar() {
    const navigate =  useNavigate();
    const [conversations, setConversations] = useState([
        {
            name: "Task1",
            lastmessage: "Last message 1",
            timeStamp: "today",
        },
        {
            name: "Task2",
            lastmessage: "Last message 2",
            timeStamp: "today",
        },
        {
            name: "Task3",
            lastmessage: "Last message 3",
            timeStamp: "today",
        }
    ]);

   
  return (
    <div className="flex-[0.3] flex-col flex">
      <div className="bg-white rounded-2xl px-[5px] py-[10px] m-[10px] flex justify-between shadow1">
        <div>
        <IconButton >
            <AccountCircleIcon/>
        </IconButton>
        </div>

        <div>
        <IconButton onClick={()=>{navigate('users')}}>
            <PersonAddIcon/>
        </IconButton>

        <IconButton onClick={()=>{navigate('group')}}>
            <GroupAddIcon/>
        </IconButton>

        <IconButton onClick={()=>{navigate('crate-groups')}}>
            <AddCircleIcon/>
        </IconButton>

        <IconButton>
            <NightlightIcon/>
        </IconButton>
        </div>
      </div>
      <div className="flex items-center bg-white rounded-[20px] px-[10px] py-[10px] m-[10px] font-medium gap-3 shadow1">
      <IconButton><SearchIcon/></IconButton>
        
    
        <input className="outline-none " placeholder="Search"/>
        
      </div>
      <div className="bg-white rounded-2xl px-[5px] py-[10px] m-[10px] flex-1 shadow1">
        {
            conversations.map((conversation)=>{
               return <ConversationItem props={conversation} key={conversation.name}/>
            })
        }

        </div>
    </div>
  )
}
