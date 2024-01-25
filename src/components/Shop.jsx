import { useGetProductsQuery } from "../store/products-api.js";

import Product from "./Product.jsx";

export default function Shop() {
  const { data, error, isLoading } = useGetProductsQuery();
  // console.log(data)
  return (
    <section id="shop">
      <h2>All products :</h2>
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>Something went wrong. Please try again</h3>}
      {data && (
        <ul id="products">
          {data.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
