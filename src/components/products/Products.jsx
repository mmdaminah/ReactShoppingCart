import React from 'react';
import './style.css';
function Products({description, price, imgSrc, deleteItem, addToCart}){
    return (
        <div className="product">
            <div className="product-image-container"><img src={imgSrc} alt="" /></div>
            <div className="product-descriptin"><a href="#">{description}</a></div>
            <div className="product-price-btn-container">
                <div>{price}$</div>
                <button onClick={addToCart} className="addBtn">Add to Cart</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )
}
export default Products;