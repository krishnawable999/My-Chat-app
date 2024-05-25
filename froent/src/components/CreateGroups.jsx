import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';
export default function CreateGroups() {
  return (
    <div className="flex-[0.7] px-[20px] py-[10px] bg-white self-center rounded-[20px] flex justify-between m-[10px]">
      <input placeholder="Enter Group Name"  className="outline-0 border-none ml-[10px] font-[1.25rem] col" />
      <IconButton>
        <DoneOutlineIcon/>
      </IconButton>

    </div>
  )
}
