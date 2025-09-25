// import ProductCard from "@/components/ui/Card/ProductCard"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFilter } from "@/context/FilterContext";
import React, { useEffect, useState } from "react";

interface product {
  category: string;
}

interface FetcResponse {
  products: product[];
}

const SideBar = () => {
  const {
     searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setKeyword,
  } = useFilter()

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
        // console.log(data);
        // console.log(uniqueCategories);
        setCategories(uniqueCategories);
      } catch (error) {
        console.log("Error fetching product", error);
      }
    };
    FetchCategories();
  }, []);



  const handleMinPriceChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : 0)
  }

  const handleMaxPriceChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      const value = e.target.value;
      setMaxPrice(value ? parseFloat(value) : 0)
  }

  const handleRadioCategoryChange =(category:string)=>{
    setSelectedCategory(category)
  }


  const handleKeyWordClick =(keyword:string)=>{
    setKeyword(keyword)
  }

  const handleResetFilter =()=>{
    setSearchQuery('')
    setSelectedCategory('')
    setMinPrice(0)
    setMaxPrice(0)
    setKeyword('')
  }
  return (
    <div className="w-64  p-5 h-screen bg-primary text-white ">

      <section>
        
        <Input
        type="text"
        placeholder="Search Content"
        value={searchQuery}
        onChange={e =>setSearchQuery(e.target.value)}
        />

        <div className=" w-full flex justify-center mt-2 gap-2 items-center">
         
          <Input
          placeholder="Min"
          value={minPrice ?? ''}
          onChange={handleMinPriceChange}

          
          />

          
          <Input
          type="text"
          placeholder="Max"
          value={maxPrice?? ''}
          onChange={handleMaxPriceChange}
          />
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
             onChange={()=>handleRadioCategoryChange(category)}
             checked ={selectedCategory === category}
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
                  <button 
                   onClick={()=>handleKeyWordClick(keyword)}
                   key={index} className="w-full  py-2  px-2 text-left hover:bg-accent/30">
                    {keyword.toUpperCase()}
                  </button>
                ))
            }
        </div>

        <Button onClick={handleResetFilter} className="bg-accent/90 hover:bg-primary/60">
            Reset filters
        </Button>
      </section>
    </div>
  );
};

export default SideBar;
