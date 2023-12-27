import React from "react";

const CartContext=React.createContext({
    tshirts:[],
    addTshirt:(item)=>{},
    totalQuantity: 0
});

export default CartContext;