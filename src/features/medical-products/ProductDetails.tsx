// import type { Product } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export interface Product{
  id:number,
  title:string,
  description:string,
  images:string,
  price:number,
  rating:number
}
const ProductDetails = () => {
    const { id } = useParams<{ id: string }>()

    const navigate = useNavigate()
    const [product , setProducts] = useState<Product|null>(null)


    useEffect(()=>{
      if(id){
        axios.get<Product>(`https://dummyjson.com/products/${id}`).then(response => { setProducts(response.data)}).catch(error=>{console.error('error fetching product',error)});
      }

     
    }
    ,[id])
     if(!product){
        return <h1> 
          <Skeleton>
            
          </Skeleton>
        </h1>
      }
  return (
    <div className="p-5 w-[60%]">
      <button className="bg-accent px-4 py-2 text-white" onClick={()=>navigate(-1)}>
        Back
      </button>

      <img src={product.images} alt={product.title} className=" w-[50%] h-auto" />
      <h1 className="text-2x mb-4 font-bold">{product.description}</h1>
      <div className="flex justify-between">
        <p>${product.price}</p>
        <span>{product.rating}</span>
      </div>
       
    </div>
  )
}

export default ProductDetails