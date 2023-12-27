import CartContext from "./auth-context";
import { useState } from "react";

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [tshirtSizes, setTshirtSizes] = useState({
    small: { quantity: 5 }, 
    medium: { quantity: 3 }, 
    large: { quantity: 7 }, 
  });

  const addToCart = (tshirt) => {
    setCart([...cart, tshirt]);
    setTotalQuantity(totalQuantity + 1); // Increment total quantity by 1

  };

  const decreaseTshirtQuantity = (size) => {
    const updatedTshirtSizes = { ...tshirtSizes };
    updatedTshirtSizes[size].quantity -= 1;
    setTshirtSizes(updatedTshirtSizes);
  };

  const cartContext = {
    tshirts: cart,
    addTshirt: addToCart,
    decreaseQuantity: decreaseTshirtQuantity,
    tshirtSizes: tshirtSizes,
    totalQuantity: totalQuantity,

  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
