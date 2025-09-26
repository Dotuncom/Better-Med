import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "@/hooks/UseCart";
import { 
  ArrowLeft, 
  Star, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Truck, 
  Shield, 
  RotateCcw 
} from "lucide-react";

export interface Product {
  id: number;
  title: string;
  description: string;
  images: string[] | string; // Handle both array and string
  price: number;
  rating: number;
  category?: string;
  brand?: string;
  stock?: number;
  discountPercentage?: number;
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Cart integration
  const { 
    addProductToCart, 
    isProductInCart, 
    getProductQuantity, 
    // increaseProductQuantity,
    // decreaseProductQuantity 
  } = useCart();

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get<Product>(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product", error);
          setLoading(false);
        });
    }
  }, [id]);

  // Handle add to cart
  const handleAddToCart = () => {
    if (product) {
      const productForCart = {
        id: product.id,
        name: product.title,
        price: product.price,
      };
      addProductToCart(productForCart, quantity);
    }
  };

  // Handle quantity changes
  const handleQuantityIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Get images array
  const getImages = () => {
    if (!product?.images) return [];
    return Array.isArray(product.images) ? product.images : [product.images];
  };

  // Loading skeleton
  if (loading || !product) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Back button skeleton */}
        <Skeleton className="w-20 h-10 mb-6" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image skeleton */}
          <div className="space-y-4">
            <Skeleton className="w-full aspect-square rounded-lg" />
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="w-20 h-20 rounded-lg" />
              ))}
            </div>
          </div>
          
          {/* Content skeleton */}
          <div className="space-y-6">
            <Skeleton className="w-3/4 h-8" />
            <Skeleton className="w-1/2 h-6" />
            <Skeleton className="w-full h-24" />
            <Skeleton className="w-32 h-12" />
            <Skeleton className="w-full h-12" />
          </div>
        </div>
      </div>
    );
  }

  const images = getImages();
  const currentImage = images[selectedImageIndex] || images[0];
  const inCart = isProductInCart(product.id);
  const cartQuantity = getProductQuantity(product.id);
  const discountedPrice = product.discountPercentage 
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        
        {/* ===== HEADER SECTION ===== */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          
          {/* Breadcrumb for desktop */}
          <div className="hidden md:flex items-center text-sm text-muted-foreground">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>{product.category}</span>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.title}</span>
          </div>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* ===== LEFT COLUMN - IMAGES ===== */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-white shadow-sm border">
              <img
                src={currentImage}
                alt={product.title}
                className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
              />
              
              {/* Discount Badge */}
              {product.discountPercentage && (
                <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                  -{Math.round(product.discountPercentage)}% OFF
                </Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index 
                        ? "border-primary shadow-lg" 
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ===== RIGHT COLUMN - PRODUCT INFO ===== */}
          <div className="space-y-6">
            
            {/* Product Title & Rating */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.brand && (
                  <Badge variant="secondary">{product.brand}</Badge>
                )}
                {product.category && (
                  <Badge variant="outline">{product.category}</Badge>
                )}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {product.title}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.rating}/5.0)
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-primary">
                  ${discountedPrice.toFixed(2)}
                </span>
                {product.discountPercentage && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
              {product.discountPercentage && (
                <p className="text-sm text-green-600 font-medium">
                  You save ${(product.price - discountedPrice).toFixed(2)} 
                  ({Math.round(product.discountPercentage)}% off)
                </p>
              )}
            </div>

            {/* Stock Status */}
            {product.stock !== undefined && (
              <div className={`text-sm font-medium ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}>
                {product.stock > 0 
                  ? `✓ In Stock (${product.stock} available)`
                  : "❌ Out of Stock"
                }
              </div>
            )}

            {/* Description */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Quantity & Cart Section */}
            <div className="space-y-4">
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleQuantityDecrease}
                    disabled={quantity <= 1}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center font-medium">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleQuantityIncrease}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Cart Status */}
              {inCart && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">
                    ✓ {cartQuantity} item{cartQuantity > 1 ? 's' : ''} in your cart
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 h-12 text-base font-semibold"
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Features/Benefits */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">What you get:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-primary" />
                    <span className="text-sm">Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm">1 year warranty included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RotateCcw className="h-5 w-5 text-primary" />
                    <span className="text-sm">30-day return policy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ===== MOBILE STICKY FOOTER ===== */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="text-lg font-bold text-primary">
                ${discountedPrice.toFixed(2)}
              </div>
              {product.discountPercentage && (
                <div className="text-sm text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </div>
              )}
            </div>
            <Button
              onClick={handleAddToCart}
              className="flex-1 h-12"
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Spacer for mobile sticky footer */}
        <div className="lg:hidden h-20"></div>
      </div>
    </div>
  );
};

export default ProductDetails;