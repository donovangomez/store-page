import React from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/products.module.css";

const Products = ({ products, setProducts }) => {
  return (
    <div className="Products">
      <h2>All Items</h2>
      <div className={styles.productContainer}>
        {products.map((product) => (
          <ProductCard
            title={product.title}
            price={product.price}
            description={product.description}
            imageUrl={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
