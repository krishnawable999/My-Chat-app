import React, { useState } from 'react'
import Sideabar from './Sideabar'
import ChatArea from './ChatArea'
let arr = [{
  name: "Text 1",
  lastmessage: "Last message 1",
  timeStamp: "today",
}];
const MainContainer = () => {
  return (
    <div className="bg-[#f4f5f8] h-[90vh] w-[90vw] flex  rounded-xl" >
      <Sideabar/>
      <ChatArea props={arr}/>
    </div>
  )
}

export default MainContainer
