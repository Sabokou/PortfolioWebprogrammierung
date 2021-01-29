import React from 'react'

const Product = ({product}) => {
    return (
        <div className={classes.card}>
            <div className={classes.content}>
                <image className={classes.media} image = '' />
                <h4>{product.name}</h4>
                <h5>{product.description}</h5>
            </div>
            <div className={classes.buttonRow}>
                <h5>{product.price}</h5>
                <button className={classes.buttonShopping}></button>
            </div>
        </div> 
    )
}

export default Product;
