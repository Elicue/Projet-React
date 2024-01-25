import { useContext } from "react";
import CartContext from "../store/shopping-cart-context";

import { Link } from "react-router-dom";

export default function Product({ id, image, title, price }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title.split(" ")[0]}</h3>
          <p className="product-price">Price : ${price}</p>
        </div>
        <p className="product-actions">
          <Link to={`/products/${id}`}>View Details</Link>
          <button onClick={() => addItemToCart(id, title, price)}>
            Add to Cart
          </button>
        </p>
      </div>
    </article>
  );
}
