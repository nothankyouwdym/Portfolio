import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './index.css'
import About from './About'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="About" element={<About />}></Route>
          </Route>
        </Routes>
  </BrowserRouter>
)
