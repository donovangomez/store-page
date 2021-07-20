import Header from "./Header";
import Products from "./Products";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    setProducts(data);
    console.log(data);
  };

  return (
    <div className="App">
      <Header />
      <Products products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
