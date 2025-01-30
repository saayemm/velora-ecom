import { useContext } from "react"
import { ShopContext } from "../context/Context"
import { Link } from "react-router"


const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext)
  return (
    <div>
        <Link className="text-gray-600 cursor-pointer" to={`/product/${id}`}>
            <div className="overflow-hidden">
                <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt="" />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className=" pb-3 text-sm font-medium">{currency}{price}</p>
        </Link>
    </div>
  )
}

export default ProductItem