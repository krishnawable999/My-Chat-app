// import './App.css'

import Login from "./components/Login"
import MainContainer from "./components/MainContainer"
import { Route, Routes } from "react-router-dom"
import Welcome from "./components/Welcome"
import ChatArea from "./components/ChatArea"
import Group from "./components/Group"
import UsersandGroups from "./components/UsersandGroups"
import CreateGroups from "./components/CreateGroups"
function App() {
  return (
    <>
      <div  className="bg-[#dddedd] min-h-[100vh] flex justify-center items-center">
        
        {/* <MainContainer/> */}
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="app" element={<MainContainer/>}>
            <Route path="welcome" element={<Welcome/>}/>
            <Route path="chat" element={<ChatArea/>}/>
            <Route path="users" element={<UsersandGroups/>}/> 
            <Route path="group" element={<Group/>}/>
            <Route path="crate-groups" element={<CreateGroups/>}/>
          </Route>
        </Routes>
        
        
      </div>
    </>
  )
}

export default App
