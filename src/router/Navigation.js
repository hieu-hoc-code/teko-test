import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from 'containers/home/Home'
import Update from 'components/update/Update'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <Route exact path="/" component={Home} />
        <Route exact path="/update" component={Update} />
      </div>
    )
  }
}

export default Navigation
