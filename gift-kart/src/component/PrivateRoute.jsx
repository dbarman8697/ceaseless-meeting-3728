import  { useContext } from 'react'
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'

function PrivateRoute({children}) {
    const{auth}=useContext(AuthContext)
    const navigate=useNavigate()
    if(auth===false){
        navigate("/login")
    }
    return children
}

export default PrivateRoute
