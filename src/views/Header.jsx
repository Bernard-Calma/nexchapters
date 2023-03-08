import logo from "../img/nexchapter.png"
import '../styles/header.css'

const Header = () => {
    return (
        <div className="containerHeader">
            <img className="headerLogo" src={logo} alt="logo" />
            <div className="headerLoginRegister">
                <p className="headerLoginRegisterText"> <span>Login</span> or <span>Register</span></p>
            </div>
        </div>
    )
}

export default Header