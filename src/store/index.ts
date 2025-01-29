import { configureStore } from '@reduxjs/toolkit'
import blobReducer from './reducers/blob-reducer'

export const store = configureStore({
  reducer: {
    blob: blobReducer
  }
})
