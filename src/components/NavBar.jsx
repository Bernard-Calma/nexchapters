import { Link } from "react-router-dom"
import "../styles/navbar.css"
const NavBar = () => {
    return(
        <nav>
            <div className="containerNavBar">
                <div className="containerLink">
                    <Link to="home" className="linkNavBar">Home</Link>
                </div>
                <div className="containerLink">
                    <Link to="mangalist" className="linkNavBar">Manga List</Link>
                </div>
                
            </div>
        </nav>
    )
}

export default NavBar