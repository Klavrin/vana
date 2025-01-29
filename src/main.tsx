import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

import { Provider } from 'react-redux'
import { store } from './store'
import SmoothScroll from './components/smooth-scroll.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </Provider>
  </React.StrictMode>
)
