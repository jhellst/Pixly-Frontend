// import "./Nav.css";
import { NavLink } from "react-router-dom";


/** Renders navigation bar for website.
 */
function NavBar( ) {

  return (
    <nav className="NavBar">
        <NavLink to="/">Pix.ly</NavLink>
        <NavLink to="/upload">Upload File</NavLink>
    </nav>

  );
}


export default NavBar;