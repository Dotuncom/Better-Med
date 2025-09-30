
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { CartItemCard } from "@/features/cart/CartItemCard";
// import { useCart } from "@/hooks/UseCart";
// import { ShoppingCart, ArrowLeft } from "lucide-react";

// export default function CartPage() {
//   const { cart, total, itemCount, isEmpty, handleCheckout, handleClearCart } = useCart(); // SINGLE HOOK

//   // Empty cart state with better UX
//   if (isEmpty) {
//     return (
//       <div className="max-w-4xl mx-auto py-12 px-4 text-center">
//         <div className="mb-6">
//           <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground" />
//         </div>
//         <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
//         <p className="text-muted-foreground mb-6">
//           Looks like you haven't added anything to your cart yet.
//         </p>
//         <Button onClick={() => window.history.back()}>
//           <ArrowLeft className="mr-2 h-4 w-4" />
//           Continue Shopping
//         </Button>
//       </div>
//     );
//   }

//   // Calculate estimated shipping (you can make this dynamic)
//   const shippingCost = total > 50 ? 0 : 5.99;
//   const finalTotal = total + shippingCost;

//   return (
//     <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//       {/* Page Header */}
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-4xl font-extrabold tracking-tight">Shopping Cart</h1>
//         <div className="text-sm text-muted-foreground">
//           {itemCount} {itemCount === 1 ? "item" : "items"} in cart
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
//         {/* CART ITEMS SECTION */}
//         <div className="lg:col-span-2">
//           <div className="space-y-4">
//             {cart.map((item) => (
//               <CartItemCard key={item.id} item={item} />
//             ))}
//           </div>

//           {/* Cart Actions */}
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 p-6 bg-muted/50 rounded-lg">
//             <Button variant="outline" onClick={() => window.history.back()}>
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Continue Shopping
//             </Button>
//             <Button variant="destructive" onClick={handleClearCart}>
//               Clear All Items
//             </Button>
//           </div>
//         </div>
        
//         {/* ORDER SUMMARY SECTION */}
//         <div className="lg:col-span-1">
//           <Card className="sticky top-8">
//             <CardHeader>
//               <CardTitle className="text-2xl">Order Summary</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {/* Subtotal */}
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">
//                   Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
//                 </span>
//                 <span className="font-medium">${total.toFixed(2)}</span>
//               </div>
              
//               {/* Shipping */}
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Shipping</span>
//                 <span className="font-medium">
//                   {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
//                 </span>
//               </div>

//               {/* Free shipping message */}
//               {shippingCost > 0 && (
//                 <div className="text-sm text-muted-foreground p-3 bg-blue-50 rounded-md">
//                   💡 Add ${(50 - total).toFixed(2)} more for free shipping!
//                 </div>
//               )}

//               <Separator />

//               {/* Final Total */}
//               <div className="flex justify-between text-xl font-bold">
//                 <span>Total</span>
//                 <span>${finalTotal.toFixed(2)}</span>
//               </div>

//               {/* Savings indicator */}
//               {shippingCost === 0 && total > 50 && (
//                 <div className="text-sm text-green-600 font-medium">
//                   🎉 You saved $5.99 on shipping!
//                 </div>
//               )}
//             </CardContent>
            
//             <CardFooter className="pt-0">
//               <Button 
//                 className="w-full text-lg" 
//                 size="lg" 
//                 onClick={handleCheckout}
//               >
//                 Proceed to Checkout
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }



import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CartItemCard } from "@/features/cart/CartItemCard";
import { useCart } from "@/hooks/UseCart";
import { ShoppingCart, ArrowLeft, Package, Truck, Shield, Tag, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function CartPage() {
  const { cart, total, itemCount, isEmpty, handleCheckout, handleClearCart } = useCart();

  // Empty cart state with better UX
  if (isEmpty) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            <div className="mb-6 relative">
              <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-12 w-12 text-gray-400" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-dashed border-gray-200 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Your Cart is Empty</h1>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added anything to your cart yet. Start shopping and discover amazing products!
            </p>
            <Button 
              onClick={() => window.history.back()}
              size="lg"
              className="w-full rounded-xl text-lg h-12"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Start Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Calculate shipping and discount
  const shippingCost = total > 50 ? 0 : 5.99;
  const discount = total > 100 ? total * 0.1 : 0; // 10% off for orders over $100
  const finalTotal = total + shippingCost - discount;

  const handleClearAllItems = () => {
    handleClearCart();
    toast.info("Cart cleared", {
      description: "All items have been removed from your cart.",
    });
  };

  const handleProceedCheckout = () => {
    handleCheckout();
    toast.success("Proceeding to checkout", {
      description: "Redirecting you to the checkout page...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Shopping Cart
              </h1>
              <p className="text-gray-500 mt-2">Review your items and checkout when ready</p>
            </div>
            <Badge variant="secondary" className="text-base px-4 py-2">
              <Package className="h-4 w-4 mr-2" />
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </Badge>
          </div>
          
          {/* Progress Bar */}
          <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-primary to-blue-600 h-full transition-all duration-500 rounded-full"
              style={{ width: `${Math.min((total / 100) * 100, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {total < 50 && `Add $${(50 - total).toFixed(2)} more for free shipping! 🚚`}
            {total >= 50 && total < 100 && "Free shipping unlocked! Add more for 10% discount! 🎉"}
            {total >= 100 && "Free shipping + 10% discount applied! 🎊"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* CART ITEMS SECTION */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Items List */}
            <div className="space-y-4">
              {cart.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>

            {/* Cart Actions */}
            <Card className="border-2">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => window.history.back()}
                    className="w-full sm:w-auto order-2 sm:order-1"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Button>
                  <Button 
                    variant="destructive" 
                    onClick={handleClearAllItems}
                    className="w-full sm:w-auto order-1 sm:order-2"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* ORDER SUMMARY SECTION */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              
              {/* Summary Card */}
              <Card className="border-2 shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <ShoppingCart className="h-6 w-6" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Subtotal */}
                  <div className="flex justify-between text-base">
                    <span className="text-gray-600">
                      Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
                    </span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </div>
                  
                  {/* Shipping */}
                  <div className="flex justify-between text-base">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Shipping</span>
                    </div>
                    <span className={`font-semibold ${shippingCost === 0 ? 'text-green-600' : ''}`}>
                      {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>

                  {/* Discount */}
                  {discount > 0 && (
                    <div className="flex justify-between text-base">
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-green-600" />
                        <span className="text-green-600 font-medium">Discount (10%)</span>
                      </div>
                      <span className="font-semibold text-green-600">
                        -${discount.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {/* Promotion Messages */}
                  {shippingCost > 0 && total < 50 && (
                    <div className="text-sm p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2">
                      <Truck className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-700">
                        Add <strong>${(50 - total).toFixed(2)}</strong> more for free shipping!
                      </span>
                    </div>
                  )}

                  {total >= 50 && total < 100 && (
                    <div className="text-sm p-3 bg-purple-50 border border-purple-200 rounded-lg flex items-start gap-2">
                      <Tag className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-700">
                        Add <strong>${(100 - total).toFixed(2)}</strong> more for 10% off your order!
                      </span>
                    </div>
                  )}

                  {shippingCost === 0 && total > 50 && (
                    <div className="text-sm p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
                      <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-green-700 font-medium">
                        🎉 You saved ${shippingCost === 0 ? '5.99' : '0.00'} on shipping!
                      </span>
                    </div>
                  )}

                  <Separator className="my-4" />

                  {/* Final Total */}
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-3xl font-extrabold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0 pb-6 px-6">
                  <Button 
                    className="w-full text-lg h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" 
                    size="lg" 
                    onClick={handleProceedCheckout}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Proceed to Checkout
                  </Button>
                </CardFooter>
              </Card>

              {/* Trust Badges */}
              <Card className="border-2">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Free shipping over $50</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Package className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Easy 30-day returns</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}