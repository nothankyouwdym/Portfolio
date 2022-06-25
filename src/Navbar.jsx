import { Link } from "react-router-dom"

const Navbar = () =>{
  return(
    <nav>
      <h3>Boubacar</h3>
      <Link to="/"><span>Home</span></Link>
      <Link to="/Menu">Menu</Link>
      <Link to="/Order"><span>Order</span></Link>
      <Link to="/About"><span>About</span></Link>
      <Link to="/Contact"><span>Contact</span></Link>
      <Link to={{pathname: "https://www.youtube.com/"}} target={"_blank"}></Link>
    </nav>
  )
}

export default Navbar