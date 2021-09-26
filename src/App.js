import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from 'components/header/Header'
import Navigation from 'router/Navigation'

import { fetchProducts, fetchColors } from 'redux/actions/productAction'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchProducts()), [dispatch])
  useEffect(() => dispatch(fetchColors()), [dispatch])
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
      </div>
    </Router>
  )
}

export default App
