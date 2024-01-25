import { useRef, useContext } from "react";

import CartModal from "./CartModal.jsx";
import CartContext from "../store/shopping-cart-context.js";
import { Link } from "react-router-dom";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const modal = useRef();

  const cartQuantity = cartCtx.countItems();

  function handleOpenCartClick() {
    modal.current.open();
  }

  return (
    <>
      <CartModal ref={modal} />
      <header id="main-header">
        <div id="main-title">
          <Link to="/">
            <img src="logo.png" alt="logo" />
          </Link>
          <h1>
            FRESH HARVEST <span>MARKET</span>
          </h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>
            <ion-icon name="cart-outline"></ion-icon> Cart ({cartQuantity})
          </button>
        </p>
      </header>
    </>
  );
}
