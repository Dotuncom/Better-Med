import ProductCard from "@/components/ui/Card/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "./ProductDetails";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate()
  const [product, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true)
    axios
      .get("https://dummyjson.com/products?limit=10")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("error fetching products,", error);
      }).finally(()=>
        setLoading(false)
      );
  }, []);
   return (
    <div className="container mx-auto px-4 py-10 ">
      <Button className="text-white mb-4" onClick={()=>navigate(-1)}>
        back
      </Button>
 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4  gap-y-14 gap-x-6">
   {loading
        ? Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-40 w-full rounded-xl" /> 
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" /> 
            </div>
          ))
        : product.map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={Array.isArray(product.images) ? product.images[0] : product.images}
              price={product.price}
            />
          ))
    }
    </div>
    </div>

   
  );
};

export default Products;
