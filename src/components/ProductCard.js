import React from "react";
import styles from "../styles/productCard.module.css"

const ProductCard = ({ title, price, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img className={styles.image} src={imageUrl} alt={title} />
      </div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <div className={styles.buttonContainer}>
          <span>{price}</span>
          <button className={styles.productButton}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
