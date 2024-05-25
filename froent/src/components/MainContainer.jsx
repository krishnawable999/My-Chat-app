import React, { useState } from 'react'
import Sideabar from './Sideabar'
import ChatArea from './ChatArea'
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import UsersandGroups from './UsersandGroups';
import { Outlet } from 'react-router-dom';
let arr = [{
  name: "Text 1",
  lastmessage: "Last message 1",
  timeStamp: "today",
},
{
  name: "Text 2",
  lastmessage: "Last message 2",
  timeStamp: "today",
},

];
const MainContainer = () => {
  return (
    <div className="bg-[#f4f5f8] h-[90vh] w-[90vw] flex  rounded-xl" >
      <Sideabar/>
      <Outlet/>
      {/* <CreateGroups/> */}
      {/* <Welcome/> */}
      {/* <ChatArea props={arr}/>
      <UsersandGroups/> */}
    </div>
  )
}

export default MainContainer
