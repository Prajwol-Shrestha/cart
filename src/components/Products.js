import React from "react";
import Product from "./Product";

export default function Products({ items }){

    return (
        <section className="products-container">
            {items.map( item => (
                <Product item={item} key={item.id}/>
            ))}
        </section>
    )
}