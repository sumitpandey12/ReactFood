import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import { IoMdCart } from "react-icons/io";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <button onClick={props.onCartClicked} className={classes.button}>
      <span className={classes.icon}>
        <IoMdCart />
      </span>
      <span className={classes.bump}>Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
