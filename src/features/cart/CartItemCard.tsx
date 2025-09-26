// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import type { CartItem } from "@/context/CartContext";
// import { Trash2, Plus, Minus } from "lucide-react";
// import { useState } from "react";
// import { useCart } from "@/hooks/UseCart";

// interface CartItemCardProps {
//   item: CartItem;
// }

// export function CartItemCard({ item }: CartItemCardProps) {
//   const { handleRemoveItem, handleIncrease, handleDecrease } = useCart(); // SINGLE HOOK
//   const [isUpdating, setIsUpdating] = useState(false);

//   // Handle quantity changes with loading state
//   const handleQuantityChange = async (action: 'increase' | 'decrease') => {
//     setIsUpdating(true);
//     try {
//       if (action === 'increase') {
//         handleIncrease(item.id);
//       } else {
//         handleDecrease(item.id);
//       }
//     } finally {
//       // Small delay to show loading state
//       setTimeout(() => setIsUpdating(false), 200);
//     }
//   };

//   const itemSubtotal = item.price * item.quantity;

//   return (
//     <Card className="shadow-sm hover:shadow-md transition-shadow">
//       <CardContent className="p-6">
//         <div className="flex items-center space-x-6">
          
//           {/* Product Image Placeholder */}
//           <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center">
//             {/* Replace with actual image when available */}
//             <span className="text-2xl">📦</span>
//           </div>

//           {/* Product Details */}
//           <div className="flex-grow min-w-0">
//             <h3 className="font-semibold text-lg truncate">{item.name}</h3>
//             <p className="text-sm text-muted-foreground mt-1">
//               ${item.price.toFixed(2)} each
//             </p>
//           </div>

//           {/* Quantity Controls */}
//           <div className="flex items-center space-x-2">
//             <Button
//               variant="outline"
//               size="icon"
//               className="h-9 w-9"
//               onClick={() => handleQuantityChange('decrease')}
//               disabled={item.quantity <= 1 || isUpdating}
//             >
//               <Minus className="h-4 w-4" />
//             </Button>
            
//             <Input 
//               type="number" 
//               value={item.quantity} 
//               readOnly 
//               className="w-16 text-center h-9 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
//             />
            
//             <Button
//               variant="outline"
//               size="icon"
//               className="h-9 w-9"
//               onClick={() => handleQuantityChange('increase')}
//               disabled={isUpdating}
//             >
//               <Plus className="h-4 w-4" />
//             </Button>
//           </div>

//           {/* Subtotal and Actions */}
//           <div className="flex flex-col items-end space-y-2 min-w-0">
//             <p className="font-bold text-lg">
//               ${itemSubtotal.toFixed(2)}
//             </p>
            
//             <Button
//               variant="ghost"
//               size="sm"
//               className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8"
//               onClick={() => handleRemoveItem(item.id)}
//             >
//               <Trash2 className="h-4 w-4 mr-1" />
//               Remove
//             </Button>
//           </div>
//         </div>

//         {/* Mobile-friendly layout for smaller screens */}
//         <div className="sm:hidden mt-4 pt-4 border-t">
//           <div className="flex justify-between items-center">
//             <span className="font-medium">Subtotal:</span>
//             <span className="font-bold text-lg">${itemSubtotal.toFixed(2)}</span>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }



import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { CartItem } from "@/context/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/hooks/UseCart";

interface CartItemCardProps {
  item: CartItem;
}

export function CartItemCard({ item }: CartItemCardProps) {
  const { handleRemoveItem, handleIncrease, handleDecrease } = useCart();
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
      <CardContent className="p-4 sm:p-6">
        {/*
          The main container is now flex on all screens, but we control 
          its direction and wrapping based on screen size.
          - flex-col: Stack vertically on small screens (default)
          - sm:flex-row: Arrange horizontally on small screens and up
          - sm:space-x-6: Add horizontal space on small screens and up
          - space-y-4: Add vertical space between stacked items on small screens
        */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
          
          {/* Product Image and Details Wrapper */}
          <div className="flex items-center space-x-4 sm:space-x-6 flex-grow-0 sm:flex-grow min-w-0">
            
            {/* Product Image Placeholder */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center">
              {/* Replace with actual image when available */}
              <span className="text-xl sm:text-2xl">📦</span>
            </div>

            {/* Product Details */}
            <div className="flex-grow min-w-0">
              <h3 className="font-semibold text-base sm:text-lg truncate">{item.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                ${item.price.toFixed(2)} each
              </p>
            </div>
          </div>
          
          {/* Quantity Controls and Actions Wrapper - This whole section will be flex to the end on small screens */}
          <div className="flex justify-between items-center w-full sm:w-auto sm:justify-end sm:space-x-6">
            
            {/* Quantity Controls */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 sm:h-9 sm:w-9"
                onClick={() => handleQuantityChange('decrease')}
                disabled={item.quantity <= 1 || isUpdating}
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <Input 
                type="number" 
                value={item.quantity} 
                readOnly 
                className="w-14 sm:w-16 text-center h-8 sm:h-9 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 sm:h-9 sm:w-9"
                onClick={() => handleQuantityChange('increase')}
                disabled={isUpdating}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Subtotal and Actions (Combined into one column for desktop, separate for mobile) */}
            <div className="hidden sm:flex flex-col items-end space-y-2 min-w-[100px]">
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
        </div>

        {/* Mobile-friendly layout for smaller screens - Now only shows actions */}
        <div className="sm:hidden mt-4 pt-4 border-t flex justify-between items-center">
          <div className="flex-grow">
            <span className="font-medium">Subtotal:</span>
            <span className="font-bold text-lg ml-2">${itemSubtotal.toFixed(2)}</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8 flex-shrink-0"
            onClick={() => handleRemoveItem(item.id)}
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Remove
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}