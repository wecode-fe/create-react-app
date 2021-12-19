import { useState } from "react"
import Product  from "./Product";

const Search = (props)=>{ 
    const [products, setProducts] = useState(props.products)
    return (
        <div className="search-area">
            <input type="text" onChange={e=>{
                const result = props.products.filter(prod=> prod.name.toLowerCase().includes(e.target.value.toLowerCase()))
                setProducts(result)
            }}/>
        {products.map((prod)=>{
          return <Product key={prod.id} id={prod.id} name={prod.name} price={prod.price} image={prod.image}/>
        })}
        </div>
    )
}

export default Search;