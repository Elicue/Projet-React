import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({children}) {
    const [shoppingCart, setShoppingCart] = useState({
        items: [],
      });
    
      function addItemToCart(id, title, price) {
        setShoppingCart((prevShoppingCart) => {
          const updatedItems = [...prevShoppingCart.items];
    
          const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === id
          );
          const existingCartItem = updatedItems[existingCartItemIndex];
    
          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
          } else {
            
            updatedItems.push({
              id: id,
              name: title,
              price: parseFloat(price),
              quantity: 1,
            });
          }
    
          return {
            items: updatedItems,
          };
        });
      }
    
      function updateItemQuantity(productId, amount) {
        setShoppingCart((prevShoppingCart) => {
          const updatedItems = [...prevShoppingCart.items];
          const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === productId
          );
    
          const updatedItem = {
            ...updatedItems[updatedItemIndex],
          };
    
          updatedItem.quantity += amount;
    
          if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
          } else {
            updatedItems[updatedItemIndex] = updatedItem;
          }
    
          return {
            items: updatedItems,
          };
        });
      }

      function clearCart () {
        setShoppingCart({items: []})
      }

      function countItems() {
        let cartQty = 0;
        if (shoppingCart.items.length > 0) {
            cartQty = shoppingCart.items.reduce((acc, item)=> acc + item.quantity, 0)
        }
        return cartQty
      }

    return (<CartContext.Provider value={{
        shoppingCart,
        addItemToCart, 
        updateItemQuantity,
        clearCart,
        countItems
    }}>
        {children}
    </CartContext.Provider>)
}

export {CartProvider};
export default CartContext;

