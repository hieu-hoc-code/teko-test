import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from 'containers/home/Home'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Home />
        </div>
      </Router>
    </Provider>
  )
}

export default App
