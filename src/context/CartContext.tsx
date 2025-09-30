import React, { createContext, useState,  } from "react";

// Types - Export these for reuse across your app
export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  image?:string,
  price: number;
};

export type Product = Omit<CartItem, "quantity">; 

type CartContextType = {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (itemId: number) => void;
  clearAllCartItems: () => void;
  getCartTotal: () => number;
  getItemQuantityInCart: (itemId: number) => number;
  increaseItemQuantity: (itemId: number) => void;
  decreaseItemQuantity: (itemId: number) => void;
  updateItemQuantity: (itemId: number, newQuantity: number) => void;
  getTotalItemsCount: () => number;
  isCartEmpty: () => boolean;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQuantityInCart = (itemId: number): number => {
    return cartItems.find((item) => item.id === itemId)?.quantity || 0;
  };

  const addItemToCart = (newItem: CartItem) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.id === newItem.id);
      
      if (existingItem) {
        // Update existing item quantity
        return previousItems.map((cartItem) =>
          cartItem.id === newItem.id
            ? { ...cartItem, quantity: cartItem.quantity + newItem.quantity }
            : cartItem
        );
      } else {
        // Add new item to cart
        return [...previousItems, newItem];
      }
    });
  };

  const increaseItemQuantity = (itemId: number) => {
    setCartItems((currentItems) => {
      const itemExists = currentItems.some((item) => item.id === itemId);
      
      if (!itemExists) {
        console.warn(`Cannot increase quantity for item ${itemId} - item not in cart. Use addItemToCart instead.`);
        return currentItems;
      }

      return currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseItemQuantity = (itemId: number) => {
    setCartItems((currentItems) => {
      return currentItems
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove items with 0 quantity
    });
  };

  const updateItemQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItemFromCart(itemId);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItemFromCart = (itemId: number) => {
    setCartItems((previousItems) => 
      previousItems.filter((item) => item.id !== itemId)
    );
  };

  const clearAllCartItems = () => {
    setCartItems([]);
  };

  const getCartTotal = (): number =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const getTotalItemsCount = (): number =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  const isCartEmpty = (): boolean => cartItems.length === 0;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItemQuantityInCart,
        addItemToCart,
        removeItemFromCart,
        clearAllCartItems,
        getCartTotal,
        increaseItemQuantity,
        decreaseItemQuantity,
        updateItemQuantity,
        getTotalItemsCount,
        isCartEmpty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
