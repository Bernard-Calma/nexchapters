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
        <section>
            <h1 className="title">Home</h1>
            <div className="containerHome">
                <p>Do you read a lot of manga and you lost track of where you are currently are already?</p>
                <p>Did you forget the last episode or chapter of an ongoing manga that you were reading and went reading another one?</p>
                <p>You can make a list for manga and track your progress so the next time you get back to it will be easier to remember what chapter are you on.</p>
            </div>
        </section>
    )
}

export default Home