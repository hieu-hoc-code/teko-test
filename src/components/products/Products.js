import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './products.scss'

import Laptop from 'components/images/laptop.png'

class Products extends Component {
  render() {
    return (
      <div className="products">
        <div className="edit-pro">
          <NavLink activeClassName="show" to="/update">Update Products</NavLink>
        </div>
        <div className="content-pro">
          <div className="product-container">
            <div className="img-product">
              <img src={Laptop} alt="logo" />
            </div>
            <div className="item">
              <h3>Laptop 1</h3>
              <span>ID : 01</span>
              <span>SKU : 1710135</span>
              <span>Color : Black</span>
            </div>
          </div>
          <div className="product-container">
            <div className="img-product">
              <img src={Laptop} alt="logo" />
            </div>
            <div className="item">
              <h3>Laptop 1</h3>
              <span>ID : 01</span>
              <span>SKU : 1710135</span>
              <span>Color : Black</span>
            </div>
          </div>
        </div>
        <div className="end">End !</div>
      </div>
    )
  }
}

export default Products
