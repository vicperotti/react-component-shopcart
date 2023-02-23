import { React } from "react";
import CartItem from "./CartItem";

export function Basket(props) {
  const { thecart, onAdd, products } = props;
  return (
    <aside>
      <h1>cart items here</h1>
      <div>{thecart.length === 0 && <div>Cart is Empty!</div>}</div>
      {thecart.map((item, i) => (
        <CartItem key={i} product={products.find((x) => x.id === item)} />
      ))}
    </aside>
  );
}
