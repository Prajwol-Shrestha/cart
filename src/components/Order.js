import React, { useContext } from "react";
import { cartContext } from "../cartContext";
import { BsTrash } from 'react-icons/bs'

export default function Order(){
    const { cart, setCart } = useContext(cartContext)

    function decrement(item){
        if( item.qty > 1 ){
            setCart( cart.map( cartItem => {
                if( cartItem.id != item.id ){
                    return cartItem
                } else{
                    return {...cartItem, qty: cartItem.qty - 1}
                }
            } ) )
        }
    }

    function increment(item){
        if( item.qty < item.stock ){
            setCart( cart.map( cartItem => {
                if( cartItem.id != item.id ){
                    return cartItem
                } else{
                    return {...cartItem, qty: cartItem.qty + 1}
                }
            } ) )
        }
    }


    function removeItem(item){
        setCart(cart.filter( cartItem => item.id != cartItem.id ) )
    }

    return (
        <section className="order-summary">
            <h1> your order summary </h1>

            { cart.length > 0 ?
                <div className="order-summary-container">
                    { cart.map( cartItem => {
                        const { name, image, price, qty, id } = cartItem;
                        const imageURL = `https://electronic-ecommerce.herokuapp.com/${image}`

                        return (
                            <section  key={id}>
                                <div className="order">
                                    <img src={imageURL} alt={name} className="order-img"/>
                                    {/* <h3> {name} </h3> */}
                                    <div className="qty">
                                        <button 
                                            onClick={() => decrement(cartItem)}
                                            className="btn changeQty"
                                        >  
                                            - 
                                        </button>
                                        {qty}
                                        <button 
                                        onClick={() => increment(cartItem)}
                                        className="btn changeQty"
                                        > 
                                        + 
                                        </button>
                                    </div>
                                    <p> {price} </p>
                                    <BsTrash onClick={() => removeItem(cartItem)}/>
                                </div>
                                <hr></hr>
                            </section>
                        )
                    } )}
                    <h3> Total: ${   cart.map( item => parseFloat(item.price.slice(1) * item.qty, 10) )
                                    .reduce( (a, b) => a + b, 0 )
                                    .toFixed(2)
                                } 
                    </h3>
                </div>
                :
                <h3 className="order-summary-container"> Your Cart is Empty </h3>
            }
        </section>
    )
}