import { useState } from "react"
import { useDispatch } from "react-redux"
import { getMangaList } from "../features/manga/mangaSlice"
import axios from "axios";

// FUTURE PLAN: Auto populate manga when entering title
const NewManga = (props) => {
    const dispatch = useDispatch()
    const [newManga, setNewManga] = useState({
        title: '',
        image: '',
        link: '',
        // totalChapters: null,
        currentChapter: "",
        userID: props.user.id
    })
    let [errorMessage, setErrorMessage] = useState('')

    // List from mapping mangalist and grabing title
    // const [mangaList, setMangaList] = useState(props.mangaList)

    const imageStandBy = (event) => {
        event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
    }
    const hideAddForm = () => {
        setNewManga({...newManga, 
            title: '',
            image: '',
            link: '',
            currentChapter: '',
        })
        setErrorMessage("")
        document.querySelector(".containerAddManga").style.cssText = `
        opacity: 0;
        visibility: hidden;
        top: 100%;`;
    }
    const showAddForm = () => {
        document.querySelector(".containerAddManga").style.cssText = `
        opacity: 1;
        visibility: visible;
        top: 32%;`;
    }

    // Manga API call
    // const url = 'https://api.jikan.moe/v4/manga';
    // let queryTitle = "naruto"
    // let query = `?q=${queryTitle}?order_by="rank`;

    // const getAnime = () => {
    //     fetch(url + query)
    //     .then(res => res.json())
    //     .then(mangaList => 
    //         // console.log(mangaList.data.map(
    //         //     manga => {return {
    //         //         'totalChapters': manga.chapters,
    //         //         'titles': manga.titles[0],
    //         //         'image': manga.images.webp.image_url
    //         //     }}))
    //         setMangaList(mangaList.data.map(
    //                 manga => {return {
    //                     'totalChapters': manga.chapters,
    //                     'title': manga.titles[0].title,
    //                     'image': manga.images.webp.image_url
    //                 }}))
    //         )
    // }

    const handleChange = (event) => {
        setNewManga({...newManga, [event.target.name]: event.target.value})
        if(event.target.name === 'image'){
            document.querySelector('.formImageNewManga').src = event.target.value
        }
    }

    const handleAddManga = (event) => {
        event.preventDefault()
        console.log(newManga)
        axios.post(`${props.serverURL}/manga/add`,newManga).then(res => res.data)
        .then(() => {
            setErrorMessage('add')
            dispatch(getMangaList(newManga.userID))
            hideAddForm()
            setErrorMessage('')
        }).catch((error) => {
            console.log(error.name)
            setErrorMessage(error.message)}
            )
    }
    return(
        <div className="containerNewManga">
            <i className="fi fi-rr-add btnAddNewManga" onClick={showAddForm}></i>
            <div className="containerAddManga">
                <div className="formNavTop">
                    <p className="addTitle">Add New</p>
                    <i className="fi fi-rr-rectangle-xmark" onClick={hideAddForm}></i>
                </div>
                <img src="" alt="new manga" onError={imageStandBy} className="formImageNewManga"/>
                <form onSubmit={handleAddManga}>
                    {/* <label htmlFor="animeList" className="animeList">Anime List <select name="animeList">
                        {
                            mangaList.map(manga => <option value={manga.title}>{manga.title}</option>)
                        }
                    </select></label> */}
                    <input type="text" name="title" placeholder="title" onChange={handleChange} value={newManga.title} required/>
                    <input type="text" name="image" placeholder="image link" onChange={handleChange} value={newManga.image} required/>
                    <input type="text" name="link" placeholder="webiste link" onChange={handleChange} value={newManga.link} required/>
                    {/* <input type="number" name="totalChapters" placeholder="total chapters"/> */}
                    <input type="number" name="currentChapter" placeholder="current chapter" onChange={handleChange} value={newManga.currentChapter} required/>
                    <p className="errorMessage">{errorMessage}</p>
                    <div className="formNav">  
                            <span className="cancel" onClick={hideAddForm}>cancel</span>
                            <button className="submit" >Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default NewManga