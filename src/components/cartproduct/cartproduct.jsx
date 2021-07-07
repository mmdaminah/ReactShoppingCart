import React from 'react';
function CartProduct({img, price}){
    return (
        <div>
            <img className="cart-product" src={img} alt="" />
            <div>{price}</div>
        </div>
    )
}
export default CartProduct