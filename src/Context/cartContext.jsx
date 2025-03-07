// src/Context/CartContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Check localStorage first
    try {
      const storedCart = localStorage.getItem("myCart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (err) {
      console.error("Error parsing cart from localStorage", err);
      return [];
    }
  });

  // Whenever 'cart' changes, save to localStorage
  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
  }, [cart]);

  // If same item.id, just increment quantity - FOR WHEN USERS CLICK 'ADD TO CART', NOT THE 'ADD ONE MORE' IN CARTPAGE
  function addToCart(product) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...product,
            discountedPrice: product.discountedPrice || null, // Ensure we store both prices
            price: product.price,
            quantity: 1,
          },
        ];
      }
    });
  }

  function removeFromCartOneItem(productId) {
    setCart(
      (prev) =>
        prev
          .map((item) => {
            if (item.id === productId) {
              // If we have more than 1, decrement
              if (item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                // If quantity is 1, remove it entirely
                return null;
              }
            }
            return item;
          })
          .filter(Boolean) // remove any null
    );
  }

  // Increase quantity for a single item (THIS IS USED FOR THE 'ADD ONE MORE' IN CARTPAGE)
  function incrementQuantity(productId) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: item.price, // Keep original price
              discountedPrice: item.discountedPrice || null, // Keep discount
            }
          : item
      )
    );
  }

  // Decrease quantity for a single item (not below 1)
  function decrementQuantity(productId) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              price: item.price, // Keep original price
              discountedPrice: item.discountedPrice || null, // Keep discount
            }
          : item
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.discountedPrice || item.price) * item.quantity,
    0
  );

  const taxRate = 0.15;
  const tax = totalPrice * taxRate;
  const totalWithTax = totalPrice + tax;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        totalPrice,
        tax,
        totalWithTax,
        incrementQuantity,
        decrementQuantity,
        removeFromCartOneItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
