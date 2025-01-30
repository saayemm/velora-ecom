import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/Context"
import Title from "./Title";
import ProductItem from "./ProductItem";


const LatestCollection = () => {
    const {products} = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])
    
    
  return (
    <div>
        <Title heading={"Latest Collections"} subHeading={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."}>

        </Title>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-1">
            {
                latestProducts.map((item,idx)=>(
                    <ProductItem key={idx} name={item.name} id={item.id} image={item.image}
                    price={item.price}></ProductItem>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection