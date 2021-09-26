import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from 'components/header/Header'
import Navigation from 'router/Navigation'

function App() {
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
