// import React, { createContext, useState } from "react";

// export type CartItem = {
//   id: number;
//   name: string;
//   quantity: number;
//   price: number;
// };

// type CartContextType = {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
//   getTotal: () => number;
//   getItemQuantity:(id:number)=>number
//   increaseCartQuantity:(id:number)=>void;
//   descreaseCartQuantity:(id:number)=>void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const getItemQuantity = (id: number): number => {
//     return cart.find((item) => item.id === id)?.quantity || 0;
//   };

//   const addToCart = (item: CartItem) => {
//     setCart((prev) => {
//       const existing = prev.find((product) => product.id === item.id);
//       if (existing) {
//         return prev.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//             : cartItem
//         );
//       } else {
//         return [...prev, item];
//       }
//     });
//   };

//   const increaseCartQuantity = (id: number) => {
//     setCart((currItems) => {
//       const found = currItems.find((item) => item.id === id);
//       if (!found) {
//         // Add new item with quantity 1 (other fields should be filled as needed)
//         return [...currItems, { id, name: "", price: 0, quantity: 1 }];
//       } else {
//         return currItems.map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//     });
//   };

//   const descreaseCartQuantity = (id: number) => {0
//     setCart((currItems) => {
//       return currItems
//         .map((item) =>
//           item.id === id
//             ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0);
//     });
//   };

//   const removeFromCart = (id: number) => {
//     setCart((prev) => prev.filter((product) => product.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const getTotal = (): number =>
//     cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         getItemQuantity,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         getTotal,
//         increaseCartQuantity,
//         descreaseCartQuantity,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
import React, { createContext, useState,  } from "react";

// Types - Export these for reuse across your app
export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

export type Product = Omit<CartItem, "quantity">; // Reusable product type

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
