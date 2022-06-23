import { Link } from "react-router-dom"

const Navbar = () =>{
  return(
    <nav>
      <h3>Boubacar</h3>
      <Link to="/"><span>Home</span></Link>
      <Link to="/About"><span>About</span></Link>
      <Link to=""><span>Contact</span></Link>
    </nav>
  )
}

export default Navbar