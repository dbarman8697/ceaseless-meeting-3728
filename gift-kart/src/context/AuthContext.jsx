import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
export const AuthContext=createContext();


function AuthContextProvider({children}) {
  let navigate=useNavigate()
  const [auth,setAuth]=useState(false)
  const login=()=>{
    setAuth(true)
    navigate("/")
  }

  const logout=()=>{
    setAuth(false)
    navigate("/")
  }
    return (
        <AuthContext.Provider value={{login,auth,logout}}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider
