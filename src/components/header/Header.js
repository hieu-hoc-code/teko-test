import React, { Component } from 'react'

import './header.scss'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">
          <h2>Product</h2>
        </div>
        <div className="our">
          <h1>Our Laptops</h1>
        </div>
        <div className="menu">
          <span>All Products</span>
          <span>Dell</span>
          <span>Asus</span>
          <span>Lenovo</span>
          <span>Acer</span>
        </div>
      </div>
    )
  }
}

export default Header
