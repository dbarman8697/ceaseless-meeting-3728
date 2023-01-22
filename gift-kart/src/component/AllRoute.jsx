import {Routes,Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ProductPage from '../Pages/ProductPage'
import ProductDetails from '../Pages/ProductDetails'
import CartPage from '../Pages/CartPage'
import LoginPage from '../Pages/LoginPage'
import User from '../User/User'
import PlusMember from '../Pages/PlusMember'
import PageNotFound from '../Pages/PageNotFound'
import Admin from '../Pages/Admin'
import SignUpPage from '../Pages/SignUpPage'
import Addproduct from '../Pages/Addproduct'
import Dashboard from '../Pages/Dashboard'
import PrivateRoute from './PrivateRoute'
function AllRoute() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/product" element={<PrivateRoute><ProductPage/></PrivateRoute>} />
            <Route path="/product/:id" element={<PrivateRoute><ProductDetails/></PrivateRoute>} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/user" element={<User/>} />
            <Route path="/plusmember" element={<PlusMember/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/addproduct" element={<Addproduct/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}

export default AllRoute
