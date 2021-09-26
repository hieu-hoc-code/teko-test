import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Product from 'containers/product/Product'
import Home from 'containers/home/Home'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <Route exact path="/" component={Home} />
        <Route exact path="/update" component={Product} />
      </div>
    )
  }
}

export default Navigation
