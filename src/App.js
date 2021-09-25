import './App.css'
import React from 'react'

import Product from 'components/products/Products'
import Header from 'components/header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Product />
    </div>
  )
}

export default App
