import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const evaluatedExpression = " Rabi"

const reactElement = React.createElement(
  'h1',
  {},
  'Hello',
  evaluatedExpression
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
