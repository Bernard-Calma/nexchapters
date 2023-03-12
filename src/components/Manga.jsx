import '../styles/manga.css'

const Manga = (props) => {
    return(
        <div className="containerManga">
            <a href={props.manga.link} target="_blank"><img src={props.manga.image} alt={props.manga.title} className="manga imgManga"/></a>
            <h2 className="manga titleManga">Title: {props.manga.title}</h2>
            <h2 className="manga totalChaptersManga">Total Chapters: {props.manga.total_chapters}</h2>
            <h2 className="manga currentChaptersManga">Current Chapter: {props.manga.current_chapter}</h2>
         </div>
    )
}

export default Manga