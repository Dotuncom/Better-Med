// ============================================
// 3. CartPage with useCart Integration
// ============================================
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CartItemCard } from "@/features/cart/CartItemCard";
import { useCart } from "@/hooks/UseCart";
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