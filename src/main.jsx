import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'  // need to import for redux initialization
import { store } from '../redux/config' // imported from redux config file  & wrap the entire components with Provider and pass the store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        {/* <CssBaseline /> */}
        <App />
    </Provider>
  </React.StrictMode>,
)
