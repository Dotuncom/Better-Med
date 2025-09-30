import { useContext } from "react";
import { CartContext,  type Product } from "@/context/CartContext";

export const useCart = () => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearAllCartItems,
    getCartTotal,
    getItemQuantityInCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    updateItemQuantity,
    getTotalItemsCount,
    isCartEmpty,
  } = context;

  // Product operations with descriptive names
  const addProductToCart = (product: Product, quantity: number = 1) => {
    addItemToCart({ ...product, quantity,  });
  };

  const removeProductFromCart = (productId: number) => {
    removeItemFromCart(productId);
  };

  const increaseProductQuantity = (productId: number) => {
    increaseItemQuantity(productId);
  };

  const decreaseProductQuantity = (productId: number) => {
    decreaseItemQuantity(productId);
  };

  const setProductQuantity = (productId: number, quantity: number) => {
    updateItemQuantity(productId, quantity);
  };

  const emptyCart = () => {
    clearAllCartItems();
  };

  const proceedToCheckout = () => {
    const total = getCartTotal();
    console.log("Proceeding to checkout with total:", total);
    console.log("Items in cart:", cartItems);
    // Add your checkout logic here
    return {
      items: cartItems,
      total,
      itemCount: getTotalItemsCount(),
    };
  };

  const getProductQuantity = (productId: number): number => {
    return getItemQuantityInCart(productId);
  };

  const isProductInCart = (productId: number): boolean => {
    return getItemQuantityInCart(productId) > 0;
  };

  const getFormattedTotal = (): string => {
    return `$${getCartTotal().toFixed(2)}`;
  };

  // Cart page specific handlers
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    addProductToCart(product, quantity);
  };

  const handleRemoveItem = (productId: number) => {
    removeProductFromCart(productId);
  };

  const handleIncrease = (productId: number) => {
    increaseProductQuantity(productId);
  };

  const handleDecrease = (productId: number) => {
    decreaseProductQuantity(productId);
  };

  const handleClearCart = () => {
    emptyCart();
  };

  const handleCheckout = () => {
    const checkoutData = proceedToCheckout();
    // Add your checkout navigation/logic here
    console.log("Checkout data:", checkoutData);
    // Example: navigate("/checkout", { state: checkoutData });
  };

  return {
    // Cart data - multiple naming options for flexibility
    cartItems,
    cart: cartItems, // Alias for cart page
    cartTotal: getCartTotal(),
    total: getCartTotal(), // Alias for cart page
    formattedCartTotal: getFormattedTotal(),
    totalItemsInCart: getTotalItemsCount(),
    itemCount: getTotalItemsCount(), // Alias for cart page
    isCartEmpty: isCartEmpty(),
    isEmpty: isCartEmpty(), // Alias for cart page

    // Product operations
    addProductToCart,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    setProductQuantity,
    getProductQuantity,
    isProductInCart,

    // Cart operations
    emptyCart,
    proceedToCheckout,

    // Cart page handlers (same functions, different names for clarity)
    handleAddToCart,
    handleRemoveItem,
    handleIncrease,
    handleDecrease,
    handleClearCart,
    handleCheckout,
  };
};
