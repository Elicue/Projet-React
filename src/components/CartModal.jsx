import { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';
import CartContext from '../store/shopping-cart-context';

const CartModal = forwardRef(function Modal(props,ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  const {clearCart, countItems} = useContext(CartContext)
  const cartQty = countItems();

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>Your cart</h2>
      <Cart />
      <form method="dialog" >
        {cartQty>0 && <button onClick={clearCart}>Clear</button>}
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;
