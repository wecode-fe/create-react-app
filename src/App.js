import './App.css';
import products from './data/products';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search products={products}></Search>
      </header>
    </div>
  );
}

export default App;
