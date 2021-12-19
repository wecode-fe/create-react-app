import './App.css';
import products from './data/products';
import Product  from './Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {products.map((prod)=>{
          return <Product key={prod.id} id={prod.id} name={prod.name} price={prod.price} image={prod.image}/>
        })}
      </header>
    </div>
  );
}

export default App;
