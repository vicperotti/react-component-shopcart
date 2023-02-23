import "./styles.css";
import React, { useState } from "react";
import { ProductDescription } from "./ProductDescription";
import { Grid } from "@material-ui/core";
import { products } from "./products.js";
import { Basket } from "./Basket";

export default function App() {
  const [thecart, setCart] = useState([]);

  const onAdd = (product) => {
    setCart([...thecart, product]);
  };

  return (
    <div className="App">
      <h1>Products</h1>
      Your cart has {thecart.length} items!
      <Grid container justifyContent="center">
        {products.map((p, i) => (
          <Grid item xs={2} key={i}>
            <ProductDescription onAdd={onAdd} {...p} />
          </Grid>
        ))}
      </Grid>
      <Basket onAdd={onAdd} thecart={thecart} products={products} />
    </div>
  );
}
