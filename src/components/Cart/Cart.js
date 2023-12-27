import CartContext from "../../store/auth-context";
import { useContext } from "react";
const Cart = () => {
  const cartContext = useContext(CartContext);
  const { tshirts, decreaseQuantity, tshirtSizes } = cartContext;

  return (
    <div>
      <ul>
        {tshirts.map((tshirt, index) => (
          <li key={index}>
            <p>
              Name: {tshirt.name}, Size: {tshirt.size}, Price: Rs.{tshirt.price}
            </p>
            <button onClick={() => decreaseQuantity(tshirt.size)}>
              {tshirt.size} ({tshirtSizes[tshirt.size].quantity})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;