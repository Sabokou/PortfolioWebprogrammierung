import React from 'react'
import styles from './Products.css'

const Product = ({ product }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <image className={styles.cardImage} src = {product.image} />
                <h4>{product.name}</h4>
                <h5>{product.description}</h5>
            </div>
            <div className={styles.cardButtonRow}>
                <h5>{product.price}</h5>
                <button className={styles.cardButtonShopping}></button>
            </div>
        </div> 
    )
}

export default Product;
