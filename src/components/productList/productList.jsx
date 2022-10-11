import Product from "../productCards/product";
import "./productList.css"

const ProductList = () => {
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-desc">School & Personal Projects</h1>
            </div>
            <div className="pl-list">            
                <Product/>
                <Product/>
                
            </div>
        </div>
    )
}

export default ProductList;