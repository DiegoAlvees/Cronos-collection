import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart-history");
    if (!storedCart) return [];
    return JSON.parse(storedCart);
  });

  const addToCart = (newItem) => {
    setCart((currentCart) => {
      const itemExists = currentCart.find((item) => item.id === newItem.id);

      let updateCart;

      if (itemExists) {
        updateCart = currentCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updateCart = [...currentCart, { ...newItem, quantity: 1 }];
      }

      localStorage.setItem("cart-history", JSON.stringify(updateCart));
      return updateCart;
    });

  };

  const removeFromCart = (id) => {
    setCart((currentCart) => {
      const updateCart = currentCart.filter((item) => item.id !== id);
      localStorage.setItem("cart-history", JSON.stringify(updateCart));
      return updateCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart-history");
  };

  const totalCart = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={totalCart}>{children}</CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.node,
};
