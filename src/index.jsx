import React from 'react'
import { render } from 'react-dom'

import './index.css'

import Constructor from './components/Constructor'

const renderApp = () => {
  const app = document.querySelector('#App')
  render(<Constructor />, app)
}

renderApp()
