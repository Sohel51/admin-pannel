import React from 'react'
import { Link } from 'react-router-dom'

const ProductHeader = () => {
    return (
        <div className="product_heading_menu">
            <ul>
                <li className='active'><Link to="">List Product</Link></li>
                <li><Link to="">Add Product</Link></li>
                <li><Link to="">Update Product</Link></li>
                <li><Link to="">Product Details</Link></li>
            </ul>
        </div>
    )
}

export default ProductHeader