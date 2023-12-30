import CartContext from "./auth-context";
import { useState } from "react";

const CartProvider = (props) => {
  const [cart, setCart] = useState([]); 

  const addToCart = (shoes) => {
    setCart([...cart, shoes]);
  };

  const cartContext = {
    shoes: cart,
    addShoe: addToCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
