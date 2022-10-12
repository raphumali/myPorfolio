import Product from "../productCards/product";
import "./productList.css"
import {products} from "../../data";

const ProductList = () => {
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-desc">School & Personal Projects</h1>
            </div>
            <div className="pl-list">    
                   {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link} text={item.text}/>
                   ))}
            </div>
        </div>
    )
}

export default ProductList;