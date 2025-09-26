// ============================================
// 1. Main useCart Hook (hooks/useCart.ts) - SINGLE HOOK
// ============================================
import { useContext } from "react";
import { CartContext, type CartItem, type Product } from "@/context/CartContext";

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
    addItemToCart({ ...product, quantity });
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

// ============================================
// 2. ProductCard with useCart Integration
// ============================================
import { FaHeart, FaSearch, FaShare } from "react-icons/fa";
import { Button } from "../button";
import type { IconType } from "react-icons";
import { Tooltip, TooltipTrigger } from "../tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart"; // SINGLE IMPORT

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

type ActionButtons = {
  icon: IconType;
  name: string;
};

const ActionButtons: ActionButtons[] = [
  { name: "Add to Wishlist", icon: FaHeart },
  { name: "Add to Compare", icon: FaSearch },
  { name: "Quick view", icon: FaShare },
];

const ProductCard = ({ id, title, image, price }: ProductCardProps) => {
  const { addProductToCart, isProductInCart, getProductQuantity } = useCart(); // SINGLE HOOK

  // Handle add to cart - creates product object from props
  const handleAddToCart = () => {
    const product = {
      id,
      name: title,
      price,
    };
    addProductToCart(product, 1);
  };

  // Check if product is already in cart for UI feedback
  const inCart = isProductInCart(id);
  const quantity = getProductQuantity(id);

  return (
    <div
      className="group relative z-20 max-w-[300px] min-h-[350px] border border-accent/50 rounded shadow-2xl bg-contain bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Add to Cart Button - shows quantity if in cart */}
      <Button
        onClick={handleAddToCart}
        className="text-white font-bold text-2xl absolute invisible group-hover:visible z-90"
      >
        {inCart ? `In Cart (${quantity})` : "Add to Cart"}
      </Button>

      {/* Price Display */}
      <div className="absolute top-0 right-10 h-20 w-20 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-accent">${price}</h1>
      </div>

      {/* Action Buttons (Wishlist, Compare, Quick View) */}
      <div className="absolute z-100 left-full invisible lg:group-hover:visible -translate-x-1/2 max-w-14 min-h-40 bg-primary rounded-[20px] py-2 flex items-center">
        <div className="z-70 h-full w-full flex flex-col text-white text-[18px] items-center justify-evenly gap-4">
          {ActionButtons.map((icon, index) => {
            const IconComponent = icon.icon;
            return (
              <Tooltip key={index}>
                <TooltipTrigger>
                  <span className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-accent/60">
                    <IconComponent />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-accent min-w-40 font-medium px-2 rounded-2xl py-1 mx-auto text-center absolute transition duration-300 ease-in-out right-8">
                  {icon.name}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>

      {/* Product Title */}
      <div className="w-full absolute bottom-0 translate-y-1/2 z-20 text-white rounded-[30px] font-bold px-10">
        <div className="w-full h-20 text-center px-2 bg-accent/90 rounded-2xl text-base font-bold flex items-center justify-center">
          {title}
        </div>
      </div>

      {/* Link to Product Details */}
      <Link className="absolute z-20 inset-0" to={`/products/${id}`}>
      </Link>
    </div>
  );
};

export default ProductCard;

// ============================================
// 3. CartPage with useCart Integration
// ============================================
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CartItemCard } from "@/components/CartItemCard";
import { useCart } from "@/hooks/useCart"; // SINGLE IMPORT
import { ShoppingCart, ArrowLeft } from "lucide-react";

export default function CartPage() {
  const { cart, total, itemCount, isEmpty, handleCheckout, handleClearCart } = useCart(); // SINGLE HOOK

  // Empty cart state with better UX
  if (isEmpty) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <div className="mb-6">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-6">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Button onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Button>
      </div>
    );
  }

  // Calculate estimated shipping (you can make this dynamic)
  const shippingCost = total > 50 ? 0 : 5.99;
  const finalTotal = total + shippingCost;

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Shopping Cart</h1>
        <div className="text-sm text-muted-foreground">
          {itemCount} {itemCount === 1 ? "item" : "items"} in cart
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* CART ITEMS SECTION */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </div>

          {/* Cart Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 p-6 bg-muted/50 rounded-lg">
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
            <Button variant="destructive" onClick={handleClearCart}>
              Clear All Items
            </Button>
          </div>
        </div>
        
        {/* ORDER SUMMARY SECTION */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle className="text-2xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
                </span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              
              {/* Shipping */}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">
                  {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>

              {/* Free shipping message */}
              {shippingCost > 0 && (
                <div className="text-sm text-muted-foreground p-3 bg-blue-50 rounded-md">
                  💡 Add ${(50 - total).toFixed(2)} more for free shipping!
                </div>
              )}

              <Separator />

              {/* Final Total */}
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>

              {/* Savings indicator */}
              {shippingCost === 0 && total > 50 && (
                <div className="text-sm text-green-600 font-medium">
                  🎉 You saved $5.99 on shipping!
                </div>
              )}
            </CardContent>
            
            <CardFooter className="pt-0">
              <Button 
                className="w-full text-lg" 
                size="lg" 
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4. CartItemCard with useCart Integration
// ============================================
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { CartItem } from "@/context/CartContext";
import { useCart } from "@/hooks/useCart"; // SINGLE IMPORT
import { Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";

interface CartItemCardProps {
  item: CartItem;
}

export function CartItemCard({ item }: CartItemCardProps) {
  const { handleRemoveItem, handleIncrease, handleDecrease } = useCart(); // SINGLE HOOK
  const [isUpdating, setIsUpdating] = useState(false);

  // Handle quantity changes with loading state
  const handleQuantityChange = async (action: 'increase' | 'decrease') => {
    setIsUpdating(true);
    try {
      if (action === 'increase') {
        handleIncrease(item.id);
      } else {
        handleDecrease(item.id);
      }
    } finally {
      // Small delay to show loading state
      setTimeout(() => setIsUpdating(false), 200);
    }
  };

  const itemSubtotal = item.price * item.quantity;

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center space-x-6">
          
          {/* Product Image Placeholder */}
          <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center">
            {/* Replace with actual image when available */}
            <span className="text-2xl">📦</span>
          </div>

          {/* Product Details */}
          <div className="flex-grow min-w-0">
            <h3 className="font-semibold text-lg truncate">{item.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              ${item.price.toFixed(2)} each
            </p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9"
              onClick={() => handleQuantityChange('decrease')}
              disabled={item.quantity <= 1 || isUpdating}
            >
              <Minus className="h-4 w-4" />
            </Button>
            
            <Input 
              type="number" 
              value={item.quantity} 
              readOnly 
              className="w-16 text-center h-9 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9"
              onClick={() => handleQuantityChange('increase')}
              disabled={isUpdating}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Subtotal and Actions */}
          <div className="flex flex-col items-end space-y-2 min-w-0">
            <p className="font-bold text-lg">
              ${itemSubtotal.toFixed(2)}
            </p>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8"
              onClick={() => handleRemoveItem(item.id)}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Remove
            </Button>
          </div>
        </div>

        {/* Mobile-friendly layout for smaller screens */}
        <div className="sm:hidden mt-4 pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="font-medium">Subtotal:</span>
            <span className="font-bold text-lg">${itemSubtotal.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ============================================
// 5. Product Listing Example with useCart
// ============================================
// This shows how to use your ProductCard in a product listing page

import ProductCard from "@/components/ProductCard";
import { useCart } from "@/hooks/useCart"; // SINGLE IMPORT

// Example product data structure
const sampleProducts = [
  { id: 1, title: "Gaming Laptop", image: "/images/laptop.jpg", price: 1299.99 },
  { id: 2, title: "Wireless Headphones", image: "/images/headphones.jpg", price: 199.99 },
  { id: 3, title: "Smartphone", image: "/images/phone.jpg", price: 699.99 },
];

export function ProductListing() {
  const { cartItems, totalItemsInCart } = useCart(); // SINGLE HOOK

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with cart indicator */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        {totalItemsInCart > 0 && (
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full">
            {totalItemsInCart} items in cart
          </div>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}