import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const App = () =>{
  return(
    <section>
      <Navbar />
      <Outlet />
    </section>
  )
}

export default App