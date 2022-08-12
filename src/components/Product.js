import React, { useContext } from "react";
import { BsCart4 } from 'react-icons/bs';
import { cartContext } from "../cartContext";

export default function Product({ item, addToCart }){
    const { id, name, image, price, stock, createDate, category} = item
    const imageURL = `https://electronic-ecommerce.herokuapp.com/${image}`

    const { cart, setCart } = useContext(cartContext)

    const date = new Date(createDate)
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()

    function format(n){
        return n > 9 ? "" + n: "0" + n;
    }

    return (
        <article className="product">
            <img src={imageURL} alt={name}/>
            <h3> { name } </h3>
            <p> Created Date: {`${format(day)} - ${format(month)} - ${year} `} </p>
            <div className="flex">
                <p> In Stock: { stock } </p>
                <h4> Rs. { parseFloat(price.slice(1)) } </h4>
            </div>
            <div className="tag-container">
                { category.map( tag => <span key={category.indexOf(tag)} className="tag btn"> {tag} </span>) }
            </div>

            <button type="button" className="btn" onClick={() => addToCart(item)}> 
                Add to Cart <BsCart4 />
            </button>
        </article>
    )
}