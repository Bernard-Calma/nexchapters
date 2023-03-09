// Store
import { useDispatch, useSelector } from "react-redux"
import {changeCurrentChapter, changeTitle, changeTotalChapters} from "../features/manga/manga"

const Manga = () => {
    const dispatch = useDispatch();
    const {manga} = useSelector((store) => store)
    return(
        <div>
            <h2>Title: {manga.title}</h2>
            <h2>Total Chapters: {manga.totalChapters}</h2>
            <h2>Current Chapter: {manga.currentChapter}</h2>
            <button onClick={()=>{dispatch(changeTitle())}}>Change Title</button>
            <button onClick={()=>{dispatch(changeTotalChapters())}}>Change Total Chapters</button>
            <button onClick={()=>{dispatch(changeCurrentChapter())}}>Change Current Chapters</button>
        </div>
    )
}

export default Manga