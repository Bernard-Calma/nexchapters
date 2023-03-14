import '../styles/manga.css'
import EditManga from './EditManga'
import NewManga from './NewManga'

const Manga = (props) => {
    const showEdit = (event) => {
        event.target.parentElement.lastChild.style.display = "flex"
        // document.querySelector(".containerEditManga").style.display = "flex";
    }
    return(
        <div className="containerManga">
            <img src={props.manga.image} alt={props.manga.title} className="manga imgManga" onClick={showEdit}/>
            <h2 className="manga titleManga">Title: {props.manga.title}</h2>
            <h2 className="manga currentChaptersManga">Your Current Chapter: {props.manga.current_chapter}</h2>
            {/* <h2 className="manga totalChaptersManga">Total Chapters: {props.manga.total_chapters}</h2> */}
            <a href={props.manga.link} target="_blank">Read Here</a>
            <EditManga 
                manga = {props.manga}
            />
         </div>
    )
}

export default Manga