import React, { useContext } from "react";
import { cartContext } from "../cartContext";

export default function Order(){
    const { cart, setCart } = useContext(cartContext)
    return (
        <section className="order-summary">
            <h1> your order summary </h1>

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
                                    <button> - </button>
                                    {qty}
                                    <button> + </button>
                                </div>
                                <p> {price} </p>
                            </div>
                            <hr></hr>
                        </section>
                    )
                } )}
            </div>
        </section>
    )
}