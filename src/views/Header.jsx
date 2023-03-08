import { Link, Outlet } from "react-router-dom"
import logo from "../img/nexchapter.png"
import '../styles/header.css'

const Header = () => {
    return (
        <div className="containerHeader">
            <Link to="/"><img className="headerLogo" src={logo} alt="logo" /></Link>
            <div className="headerLoginRegister">
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
                <p className="headerLoginRegisterText"> <span>Login</span> or <span>Register</span></p>
            </div>
        </div>
    )
}

export default Header