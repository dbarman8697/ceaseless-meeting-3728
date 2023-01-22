import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./Admin.css"
function Admin() {
    const[userName,SetUserName]=useState("")
    const[password,setPassword]=useState("")
    const[message,setMessage]=useState("LOGIN TO YOUR ACCOUNT")
    const navigate=useNavigate()
const handleSubmit=(e)=>{
  e.preventDefault()
  if(userName==="admin"&&password==="admin"){

    navigate("/dashboard")
    setMessage("successfully login");
    SetUserName("")
    setPassword("")
    
  }else{
    setMessage("login error")
  }
}


    return(
        <>
      
        <h1>{message}</h1>
       <form onSubmit={handleSubmit} className="Form">
        <label>User Name</label><br/>
         <input type="text" placeholder='enter your username' name="userName"value={userName}  onChange={(event) =>
          SetUserName(event.target.value)
        }/><br/>
         <label>Password</label><br/>
         <input type="password" placeholder="enter your password" name="password"  value={password} onChange={(event) =>
          setPassword(event.target.value)
        }/><br/>
         <button className='btn btn-primary m-2 p-2'>login</button>

       </form>
       </>
    ) 
    
  
}

export default Admin
