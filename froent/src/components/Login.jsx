import React from 'react'
import logo from "../assets/live-chat.png"
import { Button, TextField } from '@mui/material'

export default function Login() {
  return (
    <div className="h-[90vh] w-[90vw] bg-[#f4f5f8] rounded-[20px] flex shadow ">
      <div className="flex-[0.3] flex justify-center items-center ">
      <img src={logo} alt="logo" className="h-[20vw]" />
      </div>
      <div className="flex-[0.7] bg-white rounded-[20px] m-[10px] font text-[#63d7b0] font-bold flex justify-center items-center flex-col gap-[10px]">
        <p className="font-semibold">Login to your account</p>
        <TextField id="standard-basic" label="Enter Username" variant="outlined" />
        <TextField id="standard-basic" label="Password" variant="outlined" />
        <Button variant="outlined" >Login</Button>
      </div>
    </div>
  )
}
