import { useEffect, useState } from "react"

const NewManga = (props) => {
    const [newManga, setNewManga] = useState({
        title: '',
        image: '',
        link: '',
        totalChapters: null,
        currentChapters: null,
    })

    // List from mapping mangalist and grabing title
    const [mangaList, setMangaList] = useState(props.mangaList)

    const imageStandBy = (event) => {
        event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
    }
    const hideAddForm = () => {
        document.querySelector(".containerAddManga").style.display = "none";
    }
    const showAddForm = () => {
        document.querySelector(".containerAddManga").style.display = "flex";
    }

    // Manga API call
    const url = 'https://api.jikan.moe/v4/manga';
    let queryTitle = "naruto"
    let query = `?q=${queryTitle}?order_by="rank`;

    const getAnime = () => {
        fetch(url + query)
        .then(res => res.json())
        .then(mangaList => 
            // console.log(mangaList.data.map(
            //     manga => {return {
            //         'totalChapters': manga.chapters,
            //         'titles': manga.titles[0],
            //         'image': manga.images.webp.image_url
            //     }}))
            setMangaList(mangaList.data.map(
                    manga => {return {
                        'totalChapters': manga.chapters,
                        'title': manga.titles[0].title,
                        'image': manga.images.webp.image_url
                    }}))
            )
    }

    useEffect(() => {
        getAnime()
        console.log(mangaList)
    },[])
    


    return(
        <div className="containerNewManga">
            <i className="fi fi-rr-add btnAddNewManga" onClick={showAddForm}></i>
            <div className="containerAddManga">
                <div className="formNavTop">
                    <p className="addTitle">Add New</p>
                    <i className="fi fi-rr-rectangle-xmark" onClick={hideAddForm}></i>
                </div>
                <img src="" alt="new manga" onError={imageStandBy} className="formImageNewManga"/>
                <form>
                    <label htmlFor="animeList" className="animeList">Anime List <select name="animeList"> 
                        {
                            mangaList.map(manga => <option value={manga.title}>{manga.title}</option>)
                        }
                    </select></label>
                    <input type="text" name="title" placeholder="title"/>
                    <input type="text" name="image" placeholder="image link"/>
                    <input type="text" name="link" placeholder="webiste link"/>
                    <input type="number" name="totalChapters" placeholder="total chapters"/>
                    <input type="number" name="currentChapter" placeholder="current chapter"/>
                </form>
                <div className="formNav">  
                        <a className="cancel" onClick={hideAddForm}>cancel</a>
                        <button className="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default NewManga