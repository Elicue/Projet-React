import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../store/products-api";
import { useContext } from "react";
import CartContext from "../store/shopping-cart-context";

import CommentList from "./CommentList";
import ProductDescription from "./ProductDescription";

export default function ProductDetails() {
  const { id } = useParams();
  const { addItemToCart } = useContext(CartContext);
  const { data, error, isLoading } = useGetProductsQuery();

  // console.log(data, error, isLoading)

  let productContent;
  let product;
  if (isLoading) {
    productContent = <p>Product is loading</p>;
  } else if (error) {
    productContent = <p>something went wrong loading the product</p>;
  } else if (data) {
    product = data.find((product) => product.id === id);
    if (!product) {
      productContent = <h3>This product does not exist</h3>;
    } else {
      // console.log (product)
      productContent = <ProductDescription {...product} />;
    }
  }

  return (
    <div className="comments">
      <div className="infos">
        <h1>Product Details</h1>
        <div className="product">
          {productContent}
          {product && (
            <button
              onClick={() => addItemToCart(id, product.title, product.price)}
            >
              Add to Cart
            </button>
          )}
        </div>
        <a href="/">See all products</a>
      </div>
      {product && <CommentList id={id} />}
    </div>
  );
}
