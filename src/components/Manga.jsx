const Manga = (props) => {
    return(
        <div>
            <img src={props.manga.image} alt={props.manga.title}/>
            <h2>Title: {props.manga.title}</h2>
            <h2>Total Chapters: {props.manga.totalChapters}</h2>
            <h2>Current Chapter: {props.manga.currentChapter}</h2>
         </div>
    )
}

export default Manga