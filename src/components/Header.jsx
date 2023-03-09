import { Link } from "react-router-dom"
import logo from "../img/nexchapter.png"
import '../styles/header.css'

const Header = () => {
    return (
        <div className="containerHeader">
            <Link to="/"><img className="headerLogo" src={logo} alt="logo" /></Link>
            <div className="headerLoginRegister">
                <Link to="login" className="linkHeader">Login</Link> or <Link to="register" className="linkHeader">Register</Link>
            </div>
        </div>
    )
}

export default Header