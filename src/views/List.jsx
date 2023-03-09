import "../styles/list.css"
// Store
import { useSelector } from "react-redux"
const List = () => {
    const {counter} = useSelector((state) => state.counter)
    console.log(counter)
    return(
        <div>
            <h1>Your List Goes Here</h1>
            <div className="containerList">

            </div>
        </div>
    )
}

export default List