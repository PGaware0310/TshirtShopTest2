import CartContext from "../../store/auth-context";
import { useContext } from "react";
const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <div>
      <ul>
        {cartContext.map((shoe, index) => (
          <li key={index}>
            <p>
              Name: {shoe.name}, Size: {shoe.size}, Price: Rs.{shoe.price}
            </p>
            <button>
              
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;