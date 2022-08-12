import React, { useContext }from "react";
import { BsFillHandbagFill } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { BsCart4 } from 'react-icons/bs'
import { cartContext } from "../cartContext";


export default function Navbar(){
    const { cart, setCart } = useContext(cartContext)
    return (
        <nav className="navbar">
            <div className="logo">
                <h3> randomShop <BsCart4 /> </h3>
            </div>
            <div className="nav-links">
                <div className="cartbag-container">
                    <BsFillHandbagFill size={30}/>
                    <span> { cart.length > 0 ? cart.length: null } </span>
                </div>
                <button type="button" className="btn">sign in</button>
                <button type="button" className="btn">sign up</button>
            </div>
            <div className="search-bar">
                <BsSearch />
            </div>
        </nav>
    )
}