import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from 'containers/home/Home'
import Update from 'components/update/Update'
import Product from 'containers/product/Product'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <Route exact path="/" component={Home} />
        <Route exact path="/update" component={Update} />
        <Route exact path="/product" component={Product} />
      </div>
    )
  }
}

export default Navigation
