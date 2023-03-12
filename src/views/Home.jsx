import "../styles/list.css"
// Store
import { useSelector, useDispatch } from "react-redux"
import { add, minus } from "../features/counter/counterSlice"

const Home = () => {
    // console.log(useSelector((store)=>console.log(store)))
    const dispatch = useDispatch()
    const {count} = useSelector((store) => store.counter)
    // console.log(counter)
    return(
        <div>
            <h1 className="title">Home</h1>
            <div className="containerList">
                <p>Counter: {count}</p>
                <button onClick={()=>dispatch(add())}>+</button>
                <button onClick={()=>dispatch(minus())}>-</button>
            </div>
        </div>
    )
}

export default Home