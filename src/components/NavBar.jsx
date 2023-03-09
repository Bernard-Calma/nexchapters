import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav>
            <div>
                <h1>Nav Bar</h1>
                <Link to="home">Home</Link>
                <Link to="mangalist">Manga List</Link>
            </div>
        </nav>
    )
}

export default NavBar