import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if(typeof window !== 'undefined') {
            const storedCart = localStorage.getItem('cartItems');
            if (storedCart) {
                setCartItems(JSON.parse(storedCart));
            }
        }
    }, []);

    useEffect(() => {
        if(typeof window !== 'undefined') {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }

    }, [cartItems]);

    const addToCart = (product, quantity) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if(existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? {...item, quantity: item.quantity + quantity} : item
                );
            } else {
                return [...prevItems, {...product, quantity}];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
              item.id === productId ? { ...item, quantity: newQuantity } : item
            )
          );
      };

      const clearCart = () => {
        setCartItems([])
      }

    return (
      <CartContext.Provider
        value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
      >
        {children}
      </CartContext.Provider>
    );
  };
export { CartContext, CartProvider };