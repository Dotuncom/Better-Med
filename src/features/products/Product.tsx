import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const {productId} = useParams()
  return (
    <div>
        product {productId}
    </div>
  )
}

export default ProductDetails