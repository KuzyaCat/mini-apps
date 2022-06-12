import React from 'react'
import ReactDOM from 'react-dom'
import { Connect } from '@aragon/connect-react'

import './index.css'
import App from './App'

ReactDOM.render(
  <Connect location="depicture.aragonid.eth" connector="thegraph" network={4}>
    <App />
  </Connect>,
  document.getElementById('root')
)
