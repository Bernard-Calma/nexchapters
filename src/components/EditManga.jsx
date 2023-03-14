import { useState } from "react"
import { useDispatch } from "react-redux"
import { getMangaList } from "../features/manga/mangaSlice"

const EditManga = (props) => {
    const dispatch = useDispatch()
    const [manga, setNewManga] = useState(props.manga)

    const handleChange = (event) => {
        setNewManga({...manga, [event.target.name]: event.target.value})
        if(event.target.name === 'image'){
            document.querySelector('.formImageNewManga').src = event.target.value
        }
    }

    const imageStandBy = (event) => {
        event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
    }

    const hideEditForm = (event) => {
        // Hide container using index for queryselectorall
        document.querySelectorAll('.containerEditManga')[props.index].style.cssText = `
        opacity: 0;
        visibility: hidden;
        top: 100%;`;
    }

    const handleEditSubmit = () => {
        // console.log(manga)
        fetch("http://localhost:8000/manga/update",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(manga),
        }).then(res => res.json())
        .then(() => {
            dispatch(getMangaList())
            hideEditForm()
        })
    }

    const handleDeleteSubmit = () => {
        fetch("http://localhost:8000/manga/delete/" + manga.id,{method: "DELETE"})
        .then(() => {
            dispatch(getMangaList())
            hideEditForm()
        })
    }
    return(
        <div className="containerEditManga">
            <div className="formNavTop">
                <p className="addTitle">Edit</p>
                <i className="fi fi-rr-rectangle-xmark" onClick={hideEditForm}></i>
            </div>
            <img src={manga.image} alt="new manga" onError={imageStandBy} className="formImageNewManga"/>
            <form>
                {/* <label htmlFor="animeList" className="animeList">Anime List <select name="animeList">
                    {
                        mangaList.map(manga => <option value={manga.title}>{manga.title}</option>)
                    }
                </select></label> */}
                <input type="text" name="title" placeholder="title" onChange={handleChange} value={manga.title}/>
                <input type="text" name="image" placeholder="image link" onChange={handleChange} value={manga.image}/>
                <input type="text" name="link" placeholder="webiste link" onChange={handleChange} value={manga.link}/>
                {/* <input type="number" name="totalChapters" placeholder="total chapters"/> */}
                <input type="number" name="currentChapter" placeholder="current chapter" onChange={handleChange} value={manga.current_chapter}/>
            </form>
            <div className="formNav">  
                    <a className="cancel" onClick={hideEditForm}>cancel</a>
                    <button className="submit" onClick={handleDeleteSubmit}>Delete</button>
                    <button className="submit" onClick={handleEditSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default EditManga