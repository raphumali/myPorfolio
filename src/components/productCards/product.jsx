import "./product.css"

const Product = ({img,link, text}) => {
    return(
        <div className="p"> 
        <div className="p-browser">
            <b className="p-desc">{text}</b>
        </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}

export default Product;