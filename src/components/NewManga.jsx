import { useState } from "react"

const NewManga = (props) => {
    const [newManga, setNewManga] = useState({
        title: '',
        image: '',
        link: '',
        totalChapters: null,
        currentChapters: null,
    })

    // List from mapping mangalist and grabing title
    const [mangaList] = useState(props.mangaList.map(manga => manga.title))

    const imageStandBy = (event) => {
        event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
    }
    return(
        <div className="containerNewManga">
            <i className="fi fi-rr-add btnAddNewManga"></i>
            <div className="containerAddManga">
                <img src="" alt="new manga" onError={imageStandBy} className="formImageNewManga"/>
                <form>
                    <label htmlFor="animeList" className="animeList">Anime List <select name="animeList"> 
                        {
                            mangaList.map(manga => <option value={manga}>{manga}</option>)
                        }
                    </select></label>
                    <input type="text" name="title" placeholder="title"/>
                    <input type="text" name="image" placeholder="image link"/>
                    <input type="text" name="link" placeholder="webiste link"/>
                    <input type="number" name="totalChapters" placeholder="total chapters"/>
                    <input type="number" name="currentChapter" placeholder="current chapter"/>
                </form>
            </div>
        </div>
    )
}

export default NewManga