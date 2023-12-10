import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { store } from './store/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>   this cause 2 times api call to ensure that the api produces same result again
   <Provider store={store}>
     <App />
     </Provider>
  // </React.StrictMode>,
)
