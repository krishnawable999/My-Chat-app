import { IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import logo from "../assets/live-chat.png";
import '../index.css';

export default function UsersandGroups() {
  return (
    <div className="flex-[0.7] bg-white ">
      <div className="flex bg-white rounded-2xl px-[5px] py-[10px] m-[10px] flex-1 shadow1 items-center gap-5">
        <img src={logo} alt="" style={{height: "2rem", width: "2rem"}} />
        <p>Online Users</p>

      </div>
      <div className="flex items-center bg-white rounded-[20px] px-[10px] py-[10px] m-[10px] font-medium gap-3 shadow1">
        <IconButton>
            <SearchIcon/>
        </IconButton>

        <input placeholder="Search here" className="outline-none " />

      </div>
      <div className="flex-1 overflow-scroll p-[10px] ug-list">
        <div className="bg-white rounded-2xl px-[5px] py-[10px] m-[10px] flex-1 shadow1 list-tem">
            <p className="flex justify-center items-center bg-[#d9d9d9] font-bold h-[32px] w-[32px] p-[2px] grid-area-custom">T</p>
            <p className="con-title">Test User</p>
        </div>

        <div className="bg-white rounded-2xl px-[5px] py-[10px] m-[10px] flex-1 shadow1 list-tem">
            <p className="flex justify-center items-center bg-[#d9d9d9] font-bold h-[32px] w-[32px] p-[2px] grid-area-custom">T</p>
            <p className="con-title">Test User</p>
        </div>

        <div className="bg-white rounded-2xl px-[5px] py-[10px] m-[10px] flex-1 shadow1 list-tem">
            <p className="flex justify-center items-center bg-[#d9d9d9] font-bold h-[32px] w-[32px] p-[2px] grid-area-custom">T</p>
            <p className="con-title">Test User</p>
        </div>

        <div className="bg-white rounded-2xl px-[5px] py-[10px] m-[10px] flex-1 shadow1 list-tem">
            <p className="flex justify-center items-center bg-[#d9d9d9] font-bold h-[32px] w-[32px] p-[2px] grid-area-custom">T</p>
            <p className="con-title">Test User</p>
        </div>

        
      </div>
    </div>
  )
}
