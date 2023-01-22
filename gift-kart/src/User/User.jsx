import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function User() {
    const [users,setUsers]=useState([]);

    const getUser = async() => {
        const Users=await axios.get("https://639883a4fe03352a94d3d897.mockapi.io/product/kpc_user")
       setUsers(Users.data)
    }
console.log(users)
    const Delete= async (id)=>{
      await axios.delete(`https://639883a4fe03352a94d3d897.mockapi.io/product/kpc_user/${id}`)
      getUser()
  }

    useEffect(()=>{
        getUser()
    },[])
    return (
      <>
 
  <table className="table">
  <thead className='bg-dark text-white'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((el,index)=>(
        <tr key={el.id}>
        <th>{index+1}</th>
        <td>{el.f_name}</td>
        <td>{el.username}</td>
        <td>{el.email}</td>
        <td>{el.password}</td>
        <td className='action'>
        <Link><i className="fa-regular fa-eye m-2"></i></Link>
        <Link className='btn btn-primary m-2'><i className="fa-regular fa-pen-to-square"></i></Link>
        <Link className='btn btn-danger m-2' onClick={()=>{Delete(el.id)}} ><i className="fa-solid fa-trash"></i></Link>
        </td>
        </tr>
    ))
      
    }
  </tbody>
</table>
 
      </>
    );
}

export default User


