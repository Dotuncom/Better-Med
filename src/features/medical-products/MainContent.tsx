import { useFilter } from "@/context/FilterContext";
import { Tally3 } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ui/Card/ProductCard";

const MainContent = () => {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    useFilter();

  const [products, setProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdown, setDropdown] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`;

    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
    }

    
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
        // console.log(response.data.products)
      })
      .catch((error) => {
        console.error("Error fetching products", error);
      });
  }, [currentPage, keyword]);

  // filteration
  const getFilteredProduct = () => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice
      );
    }

    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (filter) {
      case "expensive":
        return filteredProducts.sort((a, b) => a.price - b.price);

      case "cheap":
        return filteredProducts.sort((a, b) => b.price - a.price);

      case "popular":
        return filteredProducts.sort((a, b) => b.rating - a.rating);

      default:
        return filteredProducts;
    }
  };
  const filteredProducts = getFilteredProduct();

  console.log(filteredProducts);


  const totalProducts = 100;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationButtons = () => {
    const buttons: number[] = [];

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage - 2 < 1) {
      endPage = Math.min(totalPages, endPage + (2 - currentPage - 1));
    }

    if (currentPage + 2 > totalPages) {
      startPage = Math.min(1, startPage - (2 - totalPages - currentPage - 1));
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }
    return buttons;
  };
  return (
    <section
      className=" relative xl:w-full lg:w-[55rem] 
     xs:w-[20rem] p-5"
    >
      <div className="flex flex-col sm:flex-ro justify-between items-cente">
        <div className="relative mb-4 mt-5">
          <button onClick={()=>setDropdown(!dropdown)} className=" border px-4 py-2 rounded-full flex items-center">
            <Tally3 className="mr-3" />
            {filter === "all" ? "Filter" : filter.charAt(0) + filter.slice(0)}
          </button>

          {dropdown && (
            <div className="absolute  bg-primary mt-2  sm-40 text-white">
              <button
                onClick={() => setFilter("cheap")}
                className="block px-4 py-3 w-full text-left hover:bg-accent/70"
              >
              
                Cheap
              </button>
              <button
                onClick={() => setFilter("expensive")}
                className="block px-4 py-3 w-full text-left hover:bg-accent/70"
              >
                {" "}
                Expensive
              </button>
              <button
                onClick={() => setFilter("popular")}
                className="block px-4 py-3 w-full text-left hover:bg-accent/70"
              >
                {" "}
                Popular
              </button>
            </div>
          )}
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2  md:grid-cols-3 gap-x-10 gap-y-14">
          {/* BookCard */}
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.thumbnail}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <div className="flex  sm-flex-row justify-between items-center mt-20">
        {/* previous */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="border px-4 py-2 rounded-full"
        >
          Previous
        </button>

        {/* 1,2,3,4,5 */}
        <div className="flex flex-row flex-wrap justify-center">
          {/* pagination button */}
          {getPaginationButtons().map((page: number) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`border px-4 py-2 mx-1 rounded-full ${
                page == currentPage ? "bg-black text-white" : ""
              }`}
            >
              {" "}
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="border px-4 py-2 rounded-full"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default MainContent;
