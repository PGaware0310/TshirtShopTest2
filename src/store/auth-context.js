import React from "react";

const CartContext=React.createContext({
    shoes:[],
    addShoe:(item)=>{},
    totalQuantity: 0
});

export default CartContext;