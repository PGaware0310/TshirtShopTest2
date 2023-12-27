import { useContext } from "react";
import CartContext from "../../store/auth-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCnxt = useContext(CartContext);
  
  return (
    <button className={classes.button} onClick={props.onClick}>
      <div>
        <span>Cart</span>
        <span>{cartCnxt.totalQuantity}</span>
      </div>
    </button>
  );
};

export default HeaderCartButton;
