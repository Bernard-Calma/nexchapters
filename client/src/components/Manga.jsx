import '../styles/manga.css'
import EditManga from './EditManga'

const Manga = (props) => {
    const showEdit = (event) => {
        event.target.parentElement.lastChild.style.cssText = `
        opacity: 1;
        visibility: visible;
        top: 20%;`;
    }
    const imageStandBy = (event) => {
        event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
    }
    return(
        <div className="containerManga">
            <img src={props.manga.image} alt={props.manga.title} className="imgManga" onClick={showEdit} onError={imageStandBy}/>
            <h2 className="titleManga">Title: {props.manga.title}</h2>
            <h2 className="currentChaptersManga">Your Current Chapter: {props.manga.current_chapter}</h2>
            {/* <h2 className="manga totalChaptersManga">Total Chapters: {props.manga.total_chapters}</h2> */}
            <a href={props.manga.link} target="_blank" rel='noreferrer' className='linkManga'>Read Here</a>
            <EditManga 
                manga = {props.manga}
                index = {props.index}
                serverURL = {props.serverURL}
            />
         </div>
    )
}

export default Manga