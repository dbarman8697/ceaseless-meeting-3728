import React from 'react'
import "./Navbar.css"
import {NavLink} from'react-router-dom'
import GIFTKART from "../Images/GK.png"

function Navbar() {




    return (
       <>
       <div className='top-nav' >
                <p>Your store: Sams Shopping Center</p>
                <p>Catalog quick Order</p>
                <p>Order by Phone 1-877-530-TREE</p>
                <p>Same-Day-Delivery</p>
                <p>Track Order</p>
                <img src='https://www.dollartree.com/ccstore/v1/images/?source=/file/general/shop_family_dollar.png&height=30&width=193' alt="shop"/>
      </div>
      <div className='nav'>
           <div><NavLink to="/" > <img src={GIFTKART} alt="logo" width="50%" /></NavLink></div>
           <div> 
            <NavLink to="/plusmember" style={{textDecoration:"none",fontSize:"20px",display:"flex",alignItems:"center",justifyContent:"right"}} >
             <img src="https://www.dollartree.com/file/general/dt_plus_pdp_plp_200x70.png"alt='logo' width="25%"/><p>Shop</p></NavLink>
           <NavLink to="/login" style={{textDecoration:"none", margin:"10px",fontSize:"20px"}}>Login</NavLink>
           <NavLink to="/cart" style={{textDecoration:"none", margin:"10px",fontSize:"20px"}}>Cart</NavLink>
           </div>
        </div>
        <div className='nav-bar'>
            <NavLink to="/product" style={{textDecoration:"none"}} ><h2>All Products </h2></NavLink>
            <h2>Holidays, Seasons & Celebrations </h2>
            <h2>Toys & Crafts </h2>
            <h2>Kitchen & Home Décor </h2>
            <h2>Home & Office</h2>
            <h2>Health & Personal Care</h2>
            <h2>Food, Candy & Drinks</h2>
        </div>
        
       <hr/>
        </>
    )
}

export default Navbar
