import React from "react";
import { Button } from "@material-ui/core";
//import { cart } from "./cart.js";
//import { ShowCart } from "./ShowCart.js";

export const ProductDescription = (props) => {
  const description = props.description;
  const price = props.price;
  const title = props.title;
  const productId = props.id;
  const onAdd = props.onAdd;

  //  const handleclick = (pid) => {
  //    cart.push(pid);
  //   console.log(cart);
  // };

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <Button variant="contained" onClick={() => onAdd(productId)}>
        Add To Order
      </Button>
    </div>
  );
};
