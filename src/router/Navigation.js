import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Product from 'components/products/Products'
import Update from 'components/update/Update'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <Route exact path="/" component={Product} />
        <Route exact path="/update" component={Update} />
      </div>
    )
  }
}

export default Navigation
