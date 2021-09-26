import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './header.scss'

import Logo from 'assets/images/logo.png'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <div className="title">
            <NavLink to="/">
              <img src={Logo} alt="logo" />

              Teko Laptop
            </NavLink>
          </div>
          <div className="our">
            <div className="tohome">
              <NavLink activeClassName="show" to="/"><h1>Our Laptops</h1></NavLink>
            </div>
          </div>
          <div className="menu">
            <span>All Products</span>
            <span>Dell</span>
            <span>Asus</span>
            <span>Lenovo</span>
            <span>Acer</span>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Header
