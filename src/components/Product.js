import React from "react";
import { BsCart4 } from 'react-icons/bs'

export default function Product({ item }){
    const { id, name, image, price, stock, createDate, category } = item
    const imageURL = `https://electronic-ecommerce.herokuapp.com/${image}`

    return (
        <article className="product">
            <img src={imageURL} alt={name}/>
            <h3> { name } </h3>
            <div className="flex">
                <p> In Stock: { stock } </p>
                <h4> { price } </h4>
            </div>
            <div className="tag-container">
                { category.map( tag => <span key={category.indexOf(tag)} className="tag btn"> {tag} </span>) }
            </div>

            <button type="button" className="btn"> Add to Cart <BsCart4 /></button>
        </article>
    )
}