import React, { useEffect, useState } from "react";
import Products from './components/Products'
import Order from './components/Order'
import { cartContext } from "./cartContext";


export default function App(){
    const [ items, setItems ] = useState([])
    const [ cart, setCart ] = useState([])

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
    
    async function fetchData(){
        const response = await fetch('https://electronic-ecommerce.herokuapp.com/api/v1/product')
        const promise = await response.json() 
        setItems(promise.data.product) 
    }

    
    useEffect(() => {
        fetchData()
    }, [])
    

    return (
        <main className="container">
            <cartContext.Provider value={{cart, setCart}} >
                <Products items={ items } addToCart={addToCart}/>
                <Order />
            </cartContext.Provider>
        </main>
    )
}