import { Fragment, useState, useContext } from "react";
import Button from "../Button/Button";
import classes from "./Header.module.css";
import CartContext from "../../store/auth-context";
import Card from "../UI/Card";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    const [tshirt, setTshirt] = useState("");
    const [tshirtDesc, setTshirtDescription] = useState("");
    const [tshirtPrice, setTshirtPrice] = useState("");
    const [tshirtLists, setTshirtLists] = useState([]);
    const [tshirtSizes, setTshirtSizes] = useState({
      small: { quantity: 100 }, // Example initial quantity
      medium: { quantity: 70 }, // Example initial quantity
      large: { quantity: 10 }, // Example initial quantity
    });
    const cartCnxt = useContext(CartContext);
  
    const addTshirtToCart = (tshirtName, size) => {
      const updatedTshirtSizes = { ...tshirtSizes };
      updatedTshirtSizes[size].quantity -= 1;
  
      const newTshirt = {
        name: String(tshirtName),
        description: String(tshirtDesc),
        price: tshirtPrice,
        size: size,
      };
  
      cartCnxt.increaseCartQuantity(tshirtName);
      cartCnxt.addTshirt(newTshirt);
      setTshirt("");
      setTshirtDescription("");
      setTshirtPrice("");
      setTshirtSizes(updatedTshirtSizes);
    };
  
    const onTshirtNameChangeHandler = (e) => {
      setTshirt(e.target.value);
    };
  
    const onTshirtDescChangeHandler = (e) => {
      setTshirtDescription(e.target.value);
    };
  
    const onTshirtPriceChangeHandler = (e) => {
      setTshirtPrice(e.target.value);
    };
  
    const onTshirtSizeChangeHandler = (size) => {
      setTshirtSizes({
        ...tshirtSizes,
        [size]: !tshirtSizes[size],
      });
    };
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
      const selectedSizes = Object.keys(tshirtSizes).filter(
        (size) => tshirtSizes[size]
      );
  
      const newTshirt = {
        name: tshirt,
        description: tshirtDesc,
        price: tshirtPrice,
        sizes: selectedSizes,
      };
      setTshirtLists([...tshirtLists, newTshirt]);
  
      setTshirt("");
      setTshirtDescription("");
      setTshirtPrice("");
      setTshirtSizes({ small: false, medium: false, large: false });
    };
  
    return (
      <Fragment>
        <div>
          <header className={classes.header}>
            <h1 className={classes.h1}>T-shirt Shop</h1>
            <HeaderCartButton onClick={props.onShow} />
          </header>
        </div>
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <label>T-shirt</label>
          <input
            type="text"
            value={tshirt}
            onChange={onTshirtNameChangeHandler}
          />
          <label>Description</label>
          <input
            type="text"
            value={tshirtDesc}
            onChange={onTshirtDescChangeHandler}
          />
          <label>Price</label>
          <input
            type="number"
            value={tshirtPrice}
            onChange={onTshirtPriceChangeHandler}
          />
          <label>Small</label>
          <input
            type="checkbox"
            checked={tshirtSizes.small}
            onChange={() => onTshirtSizeChangeHandler("small")}
          />
  
          <label>Medium</label>
          <input
            type="checkbox"
            checked={tshirtSizes.medium}
            onChange={() => onTshirtSizeChangeHandler("medium")}
          />
  
          <label>Large</label>
          <input
            type="checkbox"
            checked={tshirtSizes.large}
            onChange={() => onTshirtSizeChangeHandler("large")}
          />
  
          <Button>Add Product</Button>
        </form>
        <Card>
          {tshirtLists.map((tshirt, index) => (
            <li className={classes.li} key={index}>
              <p>
                Name: {tshirt.name} - Description: {tshirt.description} - Price:
                Rs.
                {tshirt.price}
                <Button onClick={() => addTshirtToCart(tshirt.name, "large")}>
                  Large ({tshirtSizes.large.quantity})
                </Button>
                <Button onClick={() => addTshirtToCart(tshirt.name, "medium")}>
                  Medium ({tshirtSizes.medium.quantity})
                </Button>
                <Button onClick={() => addTshirtToCart(tshirt.name, "small")}>
                  Small ({tshirtSizes.small.quantity})
                </Button>
              </p>
            </li>
          ))}
        </Card>
      </Fragment>
    );
  };
  

export default Header;
