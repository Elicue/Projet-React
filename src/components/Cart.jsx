import { useContext } from "react";
import CartContext from "../store/shopping-cart-context";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.shoppingCart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {cartCtx.shoppingCart.items.length === 0 && <p>No items in cart !</p>}
      {cartCtx.shoppingCart.items.length > 0 && (
        <ul id="cart-items">
          {cartCtx.shoppingCart.items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button
                    onClick={() => cartCtx.updateItemQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => cartCtx.updateItemQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}