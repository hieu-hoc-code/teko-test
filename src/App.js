import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from 'router/Navigation'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigation />
        </div>
      </Router>
    </Provider>
  )
}

export default App
