import { configureStore } from '@reduxjs/toolkit'
// This one needto import from redux setup
import  slice from './store'                 

export const store = configureStore({
    reducer: {
      cart : slice
    },
  })


