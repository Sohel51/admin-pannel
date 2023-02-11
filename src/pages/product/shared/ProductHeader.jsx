import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductHeader = () => {
    return (
        <div className="product_heading_menu">
            <ul>
                <li><NavLink to="/products">List Product</NavLink></li>
                <li><NavLink to="/addproduct">Add Product</NavLink></li>
                <li><NavLink to="/updateproduct">Update Product</NavLink></li>
                <li><NavLink to="/productdetails">Product Details</NavLink></li>
            </ul>
        </div>
    )
}

export default ProductHeader