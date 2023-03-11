// Store
import { useDispatch } from "react-redux";
import {changeCurrentChapter, changeTitle, changeTotalChapters} from "../features/manga/mangaSlice"

const Manga = (props) => {
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Title: {props.manga.title}</h2>
            <h2>Total Chapters: {props.manga.totalChapters}</h2>
            <h2>Current Chapter: {props.manga.currentChapter}</h2>
            <button onClick={()=>{dispatch(changeTitle())}}>Change Title</button>
            <button onClick={()=>{dispatch(changeTotalChapters())}}>Change Total Chapters</button>
            <button onClick={()=>{dispatch(changeCurrentChapter())}}>Change Current Chapters</button>
        </div>
    )
}

export default Manga