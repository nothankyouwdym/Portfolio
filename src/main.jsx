import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './index.css'
import About from './About'
import Contact from "./Contact"
import Home from './Home'
import Menu from './Menu'
import Order from './Order'
import Ordered from './Ordered'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="About" element={<About />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="Menu" element={<Menu />}></Route>
            <Route path="Order" element={<Order />}></Route>
            <Route path="Ordered" element={<Ordered />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes>
  </BrowserRouter>
)
