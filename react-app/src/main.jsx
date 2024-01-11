import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppClass from './AppClass.jsx'

import imageData from './componets/data'



const images = imageData()
// console.log(images)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App prop = {images}/>
    <AppClass prop = {images}/>
  </React.StrictMode>,
)