import { useState } from "react";
const Product = (props)=>{
    const [sales, setSales] = useState(0);

    const increaseSales = ()=>{
        setSales(sales+1);
    }

    return  (
        <div className="product-container">
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name}/>
            <p>PRICE {props.price} IQD</p>
            <p>SALES {sales}</p>
            <button onClick={increaseSales}>Buy Now</button>
        </div>
    );
}

export default Product;