import React from 'react'
import {NavLink} from "react-router-dom"
import { Link,useSearchParams } from 'react-router-dom';
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import "./Dashboard.css"

const getCurrentPageUrl = (value) => {
    value=Number(value);
    if(typeof value==="Number"&& value<=0){
        value=1
    }
    if(!value){
        value=1
    }
    return value
}




function Dashboard() {
    const [products,setProducts]=useState([])
    let[searchParams,setSearchParams]=useSearchParams()
    const [page,setPage]=useState(getCurrentPageUrl(searchParams.get("page"))||1)

     
    const getProduct= async(page,limit)=>{
        const Products=await axios.get( `http://localhost:3001/products/?_page=${page}&_limit=${limit}`)
        setProducts(Products.data)
    }

    const Delete= async (id)=>{
        await axios.delete(` http://localhost:3001/products/${id}`)
        getProduct()
    }
    useEffect(()=>{
        getProduct(page,4)
    },[page])

    useEffect(()=>{
        let ParamObj={page};
        setSearchParams(ParamObj)
    },[page])

    return (
        <>
        <div className='button'>
        <NavLink to="/user" className="btn btn-primary m-5">Users</NavLink>
        <NavLink to="/addproduct" className="btn btn-primary m-5">Add Product</NavLink>     
        </div>        
       <div className='admin'>
       {products?.map((prod)=>(
            <div key ={prod.id} className="cards" >
               <div className='image'>
                <img src={prod.image} alt="" width="100%" />
               </div>
                <div className="productDetails" >
                    <h2>{prod.title}</h2>
                    <p>Category:{prod.category}</p>
                    <p>Price:{prod.price}</p>
                    <NavLink to={`/product/${prod.id}`}><i className="fa-regular fa-eye m-2"></i></NavLink>
                    <Link className='btn btn-primary m-2'><i className="fa-regular fa-pen-to-square"></i></Link>
                    <Link className='btn btn-danger m-2' onClick={()=>{Delete(prod.id)}} ><i className="fa-solid fa-trash" ></i></Link>
                </div>
            </div>
             ))}
       </div>
       <button disabled={page===1} className='btn btn-danger m-2' onClick={(()=>setPage(page-1))} >Previous</button>
       <button>{page}</button>
       <button className='btn btn-primary m-2' onClick={(()=>setPage(page+1))} >Next</button>
        </>
    )
}

export default Dashboard
