import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import logo from "../img/nexchapter.png"
import '../styles/header.css'

const Header = () => {
    const {user} = useSelector(store => store.user)
    return (
        <header className="containerHeader">
            <Link to="/"><img className="headerLogo" src={logo} alt="logo" /></Link>
            {
                !user.userID ? 
                <div className="headerLoginRegister">
                    <Link 
                        to="login" 
                        className="linkHeader"
                    >Login</Link> 
                    <span> or </span>  
                    <Link to="register" className="linkHeader">Register</Link>
                </div>
                :
                <div className="headerLoginRegister">
                    <p className="username">{user.username}</p>
                </div>
            }
            
        </header>
    )
}

export default Header