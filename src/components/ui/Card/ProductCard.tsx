// import { FaHeart, FaSearch, FaShare } from "react-icons/fa";
// import { Button } from "../button";
// import type { IconType } from "react-icons";
// import { Tooltip, TooltipTrigger } from "../tooltip";
// import { TooltipContent } from "@radix-ui/react-tooltip";
// import { Link } from "react-router-dom";
// import { useCart } from "@/hooks/UseCart";
// import { ShoppingCart, Plus } from "lucide-react";

// interface ProductCardProps {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
// }

// type ActionButtons = {
//   icon: IconType;
//   name: string;
// };

// const ActionButtons: ActionButtons[] = [
//   { name: "Add to Wishlist", icon: FaHeart },
//   { name: "Add to Compare", icon: FaSearch },
//   { name: "Quick view", icon: FaShare },
// ];

// const ProductCard = ({ id, title, image, price }: ProductCardProps) => {
//   const { addProductToCart, isProductInCart, getProductQuantity } = useCart();

//   // Handle add to cart - creates product object from props
//   const handleAddToCart = () => {
//     const product = {
//       id,
//       name: title,
//       price,
//     };
//     addProductToCart(product, 1);
//   };

//   // Check if product is already in cart for UI feedback
//   const inCart = isProductInCart(id);
//   const quantity = getProductQuantity(id);

//   return (
//     <>
//       {/* ===== DESKTOP VIEW (lg and above) - Your Original Style ===== */}
//       <div className="hidden lg:block">
//         <div
//           className="group relative z-20 max-w-[300px] min-h-[350px] border border-accent/50 rounded shadow-2xl bg-contain bg-no-repeat flex items-center justify-center"
//           style={{ backgroundImage: `url(${image})` }}
//         >
//           {/* Add to Cart Button - shows quantity if in cart */}
//           <Button
          
//             onClick={handleAddToCart}
//             className="text-white font-bold text-2xl absolute invisible group-hover:visible z-90"
//           >
//             {inCart ? `In Cart (${quantity})` : "Add to Cart"}
//           </Button>

//           {/* Price Display */}
//           <div className="absolute top-0 right-10 h-20 w-20 flex items-center justify-center">
//             <h1 className="text-3xl font-bold text-accent">${price}</h1>
//           </div>

//           {/* Action Buttons (Wishlist, Compare, Quick View) */}
//           <div className="absolute z-100 left-full invisible lg:group-hover:visible -translate-x-1/2 max-w-14 min-h-40 bg-primary rounded-[20px] py-2 flex items-center">
//             <div className="z-70 h-full w-full flex flex-col text-white text-[18px] items-center justify-evenly gap-4">
//               {ActionButtons.map((icon, index) => {
//                 const IconComponent = icon.icon;
//                 return (
//                   <Tooltip key={index}>
//                     <TooltipTrigger>
//                       <span className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-accent/60">
//                         <IconComponent />
//                       </span>
//                     </TooltipTrigger>
//                     <TooltipContent className="bg-accent min-w-40 font-medium px-2 rounded-2xl py-1 mx-auto text-center absolute transition duration-300 ease-in-out right-8">
//                       {icon.name}
//                     </TooltipContent>
//                   </Tooltip>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Product Title */}
//           <div className="w-full absolute bottom-0 translate-y-1/2 z-20 text-white rounded-[30px] font-bold px-10">
//             <div className="w-full h-20 text-center px-2 bg-accent/90 rounded-2xl text-base font-bold flex items-center justify-center">
//               {title}
//             </div>
//           </div>

//           {/* Link to Product Details */}
//           <Link className="absolute z-20 inset-0" to={`/products/${id}`}>
//           </Link>
//         </div>
//       </div>

//       {/* ===== MOBILE & TABLET VIEW (below lg) - New Card Design ===== */}
//       <div className="block lg:hidden">
//         <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
          
//           {/* Product Image Section */}
//           <div className="relative aspect-square overflow-hidden bg-gray-50">
//             <img 
//               src={image} 
//               alt={title}
//               className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//             />
            
//             {/* Cart Status Badge - Top Right */}
//             {inCart && (
//               <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                 <ShoppingCart className="h-3 w-3" />
//                 {quantity}
//               </div>
//             )}

//             {/* Quick Action Buttons - Top Left */}
//             <div className="absolute top-3 left-3 flex flex-col gap-2">
//               {ActionButtons.map((icon, index) => {
//                 const IconComponent = icon.icon;
//                 return (
//                   <button
//                     key={index}
//                     className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-110"
//                     title={icon.name}
//                   >
//                     <IconComponent className="h-4 w-4 text-gray-700" />
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Price Badge - Bottom Right */}
//             <div className="absolute bottom-3 right-3 bg-accent text-white px-3 py-1 rounded-full font-bold text-lg shadow-lg">
//               ${price}
//             </div>
//           </div>

//           {/* Product Info Section */}
//           <div className="p-4">
//             {/* Product Title */}
//             <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
//               {title}
//             </h3>

//             {/* Add to Cart Button - Mobile Style */}
//             <Button
//               onClick={handleAddToCart}
//               className={`w-full py-3 text-base font-semibold rounded-lg transition-all duration-200 ${
//                 inCart
//                   ? "bg-green-600 hover:bg-green-700 text-white"
//                   : "bg-primary hover:bg-primary/90 text-white"
//               }`}
//             >
//               {inCart ? (
//                 <div className="flex items-center justify-center gap-2">
//                   <ShoppingCart className="h-5 w-5" />
//                   In Cart ({quantity})
//                 </div>
//               ) : (
//                 <div className="flex items-center justify-center gap-2">
//                   <Plus className="h-5 w-5" />
//                   Add to Cart
//                 </div>
//               )}
//             </Button>
//           </div>

//           {/* Link Overlay for Navigation */}
//           <Link 
//             className="absolute inset-0 z-10" 
//             to={`/products/${id}`}
//             onClick={(e) => {
//               // Prevent navigation when clicking the add to cart button or action buttons
//               const target = e.target as HTMLElement;
//               if (target.closest('button')) {
//                 e.preventDefault();
//               }
//             }}
//           >
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductCard;



import { FaHeart, FaSearch, FaShare } from "react-icons/fa";
import { Button } from "../button";
import type { IconType } from "react-icons";
import { Tooltip, TooltipTrigger } from "../tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/UseCart";
import { ShoppingCart, Plus } from "lucide-react";
import { toast } from "sonner";

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
  const { addProductToCart, isProductInCart, getProductQuantity } = useCart();
  const navigate = useNavigate();

  // Handle add to cart - creates product object with IMAGE
  const handleAddToCart = () => {
    const product = {
      id,
      name: title,
      price,
      image, 
    };
    addProductToCart(product, 1);
    
    // Show toast notification
    toast.success("Added to cart!", {
      description: `${title} has been added to your cart.`,
      action: {
        label: "View Cart",
        onClick: () => navigate('/cart'),
      },
    });
  };

  // Check if product is already in cart for UI feedback
  const inCart = isProductInCart(id);
  const quantity = getProductQuantity(id);

  return (
    <>
      {/* ===== DESKTOP VIEW (lg and above) - Your Original Style ===== */}
      <div className="hidden lg:block">
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
      </div>

      {/* ===== MOBILE & TABLET VIEW (below lg) - New Card Design ===== */}
      <div className="block lg:hidden">
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
          
          {/* Product Image Section */}
          <div className="relative aspect-square overflow-hidden bg-gray-50">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            
            {/* Cart Status Badge - Top Right */}
            {inCart && (
              <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <ShoppingCart className="h-3 w-3" />
                {quantity}
              </div>
            )}

            {/* Quick Action Buttons - Top Left */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {ActionButtons.map((icon, index) => {
                const IconComponent = icon.icon;
                return (
                  <button
                    key={index}
                    className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-110"
                    title={icon.name}
                  >
                    <IconComponent className="h-4 w-4 text-gray-700" />
                  </button>
                );
              })}
            </div>

            {/* Price Badge - Bottom Right */}
            <div className="absolute bottom-3 right-3 bg-accent text-white px-3 py-1 rounded-full font-bold text-lg shadow-lg">
              ${price}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="p-4">
            {/* Product Title */}
            <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
              {title}
            </h3>

            {/* Add to Cart Button - Mobile Style */}
            <Button
              onClick={handleAddToCart}
              className={`w-full py-3 text-base font-semibold rounded-lg transition-all duration-200 ${
                inCart
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-primary hover:bg-primary/90 text-white"
              }`}
            >
              {inCart ? (
                <div className="flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  In Cart ({quantity})
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Plus className="h-5 w-5" />
                  Add to Cart
                </div>
              )}
            </Button>
          </div>

          {/* Link Overlay for Navigation */}
          <Link 
            className="absolute inset-0 z-10" 
            to={`/products/${id}`}
            onClick={(e) => {
              // Prevent navigation when clicking the add to cart button or action buttons
              const target = e.target as HTMLElement;
              if (target.closest('button')) {
                e.preventDefault();
              }
            }}
          >
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;