import React from "react";
import classes from "./HeaderCartButton.module.css";
import { IoMdCart } from "react-icons/io";

const HeaderCartButton = (props) => {
  return (
    <button onClick={props.onCartClicked} className={classes.button}>
      <span className={classes.icon}>
        <IoMdCart />
      </span>
      <span className={classes.bump}>Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
