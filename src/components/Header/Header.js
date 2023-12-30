import { Fragment, useState, useContext } from "react";
import Button from "../Button/Button";
import classes from "./Header.module.css";
import CartContext from "../../store/auth-context";
import Card from "../UI/Card";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const [shoe, setShoe] = useState("");
  const [shoeDesc, setShoeDescription] = useState("");
  const [shoePrice, setShoePrice] = useState("");
  const [shoeLists, setShoeLists] = useState([]);

  const onShoeNameChangeHandler = (e) => {
    setShoe(e.target.value);
  };

  const onShoeDescChangeHandler = (e) => {
    setShoeDescription(e.target.value);
  };

  const onShoePriceChangeHandler = (e) => {
    setShoePrice(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newShoe = {
      name: shoe,
      description: shoeDesc,
      price: shoePrice,
      availableQuantity: {
        small: 10, // Fixed quantity for small size
        medium: 150, // Fixed quantity for medium size
        large: 100, // Fixed quantity for large size
      },
    };
    setShoeLists([...shoeLists, newShoe]);
    setShoe("");
    setShoeDescription("");
    setShoePrice("");
  };

  return (
    <Fragment>
      <div>
        <header className={classes.header}>
          <h1 className={classes.h1}>Shoes Shop</h1>
          <HeaderCartButton />
        </header>
      </div>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <label>ShoeName</label>
        <input type="text" value={shoe} onChange={onShoeNameChangeHandler} />
        <label>Description</label>
        <input
          type="text"
          value={shoeDesc}
          onChange={onShoeDescChangeHandler}
        />
        <label>Price</label>
        <input
          type="number"
          value={shoePrice}
          onChange={onShoePriceChangeHandler}
        />
        <label>Available Quantity:</label>
        <span>
          <label>Small</label>
          <input className={classes.input} type="text" value={10} />
          <label>Medium</label>
          <input className={classes.input} type="text" value={150} />

          <label>Large</label>
          <input className={classes.input} type="text" value={100} />
        </span>
        <Button>Add Product</Button>
      </form>
      <Card>
        {shoeLists.map((shoe, index) => (
          <li className={classes.li} key={index}>
            <p>
              Name: {shoe.name} - Description: {shoe.description} - Price: Rs.{" "}
              {shoe.price}
              <Button>Small: {shoe.availableQuantity.small}</Button>
              <Button>Medium: {shoe.availableQuantity.medium}</Button>
              <Button>Large: {shoe.availableQuantity.large}</Button>
            </p>
          </li>
        ))}
      </Card>
    </Fragment>
  );
};

export default Header;
