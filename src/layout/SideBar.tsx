// import ProductCard from "@/components/ui/Card/ProductCard"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

interface product {
  category: string;
}

interface FetcResponse {
  products: product[];
}

const SideBar = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirts",
  ]);

  useEffect(() => {
    const FetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetcResponse = await response.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        console.log(data);
        console.log(uniqueCategories);
        setCategories(uniqueCategories);
      } catch (error) {
        console.log("Error fetching product", error);
      }
    };
    FetchCategories();
  }, []);
  return (
    <div className="w-64 p-5 min-h-screen bg-primary text-white ">

      <section>
        {/* <input
          type="text"
          className="border-2 rounded px-2 mb-3 sm:mb-0 w-full"
          placeholder="Search Content"
        /> */}
        <Input
        type="text"
        placeholder="Search Content"/>

        <div className=" w-full flex justify-center mt-2 gap-2 items-center">
          {/* <input
            type="text"
            className="border-2 rounded mr-2 px-5 w-full mb-3 "
            placeholder="Min"
          /> */}
          <Input
          placeholder="Min"/>

          {/* <input
            type="text"
            className="border-2 rounded mr-2 px-5 w-full mb-3 "
            placeholder="Max"
          /> */}
          <Input
          type="text"
          placeholder="Max"/>
        </div>

        {/* categories */}
        <section>
        <div>
          <h2 className="text-xl font-semi-bold mb-3">Categories</h2>
        </div>
        {categories.map((category, index) => (
          <label key={index} htmlFor="category" className="block mb-2">
            <input 
            type="radio" 
            name="category"
             value={category}
              className="mr-2 w-4 h-4" />
              {category.toUpperCase()}
          </label>
        ))}
        </section>

        {/* key words */}
        <h2 className="text-xl font-semi-bold mb-3">Keywords</h2>
        <div className="flex flex-col space-y-2 text-white">
            {
                keywords.map((keyword,index)=>(
                  <button key={index} className="w-full  py-2  px-2 text-left hover:bg-accent/30">
                    {keyword.toUpperCase()}
                  </button>
                ))
            }
        </div>

        <Button className="bg-accent/90 hover:bg-primary/60">
            Reset filters
        </Button>
      </section>
    </div>
  );
};

export default SideBar;
