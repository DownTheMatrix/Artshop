import React from 'react'
import products from "../products"

function HomeScreen() {
    return (
        <div>
            {products.map(product => {
                return <p>{product.name}</p>
            })}
        </div>
    )
}

export default HomeScreen
