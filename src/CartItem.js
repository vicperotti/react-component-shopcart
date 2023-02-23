import { React } from "react";

export default function CartItem(props) {
  const {  product } = props;
  return (
    <div >
      {product.title} {product.price}
    </div>
  );
}
