import React, { useEffect, useState } from "react";
import Products from './components/Products'
import Order from './components/Order'
import Navbar from "./components/Navbar";
import { cartContext } from "./cartContext";
import Form from "./components/Form";


export default function App(){
    const [ items, setItems ] = useState([])
    const [ cart, setCart ] = useState([])
    const [ checkOut, setCheckOut ] = useState(false)

    function addToCart(item){
        const exists = cart.find( cartItem => cartItem.id === item.id )
        if ( exists ){
            setCart( 
                    cart.map( 
                        cartItem => cartItem.id === item.id ? 
                            {...exists, qty: exists.stock > exists.qty ? exists.qty + 1: exists.qty} : 
                            cartItem 
                    ) 
            )
        } else {
            setCart([...cart, {...item, qty: 1}])
        }
    }

    function checkout(val){
        setCheckOut(val)
    }
    
    async function fetchData(){
        const response = await fetch('https://electronic-ecommerce.herokuapp.com/api/v1/product')
        const promise = await response.json() 
        setItems(promise.data.product) 
    }

    
    useEffect(() => {
        fetchData()
    }, [])
    

    return (
        <>
            <cartContext.Provider value={{cart, setCart}} >
                <Navbar />
                <main>
                        { checkOut ? 
                            <Form checkout={checkout}/> : 
                            <div className="container"> 
                                <Products items={ items } addToCart={addToCart}/>
                                <Order checkout={checkout}/>
                            </div> 
                        }
                </main>
            </cartContext.Provider>
        </>
    )
}