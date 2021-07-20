import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products, setProducts }) => {
  return (
    <div className="Products">
      <h2>Give me a job poasda</h2>
      {products.map((product) => (
        <ProductCard
          title={product.title}
          price={product.price}
          description={product.description}
          imageUrl={product.image}
        />
      ))}
    </div>
  );
};

export default Products;
