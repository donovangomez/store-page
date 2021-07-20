import React from "react";

const Products = ({ products, setProducts }) => {
  return (
    <div className="Products">
      <h2>Give me a job poasda</h2>
      {products.map((product) => (
        <h3>{product.title}</h3>
      ))}
    </div>
  );
};

export default Products;
