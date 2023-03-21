import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "../styles/navbar.css"
const NavBar = () => {
    const {user} = useSelector(store => store.user)
    return(
        <nav>
            <div className="containerNavBar">
                <div className="containerLink">
                    <Link to="home" className="linkNavBar">Home</Link>
                </div>
                {
                    user.id
                    ? <div className="containerLink">
                        <Link to="mangalist" className="linkNavBar">Manga List</Link>
                    </div>
                    : <></>
                }
                
                
            </div>
        </nav>
    )
}

export default NavBar