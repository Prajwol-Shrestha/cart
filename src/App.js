import React, { useEffect, useState } from "react";
import Products from './components/Products'


export default function App(){
    const [ items, setItems ] = useState([])
    
    async function fetchData(){
        const response = await fetch('https://electronic-ecommerce.herokuapp.com/api/v1/product')
        const promise = await response.json() 
        setItems(promise.data.product) 
    }

    
    useEffect(() => {
        fetchData()
    }, [])
    

    return <Products items={ items }/>
}