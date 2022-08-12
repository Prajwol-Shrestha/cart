import React from "react";
import Product from "./Product";

export default function Products({ items, addToCart }){

    return (
        <section className="products-container">
            {items.map( item => (
                <Product item={item} key={item.id} addToCart={addToCart}/>
            ))}
        </section>
    )
}