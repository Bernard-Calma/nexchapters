import { useState } from "react"

const EditManga = (props) => {
    const [manga, setNewManga] = useState(props.manga)

    const handleChange = (event) => {
        setNewManga({...manga, [event.target.name]: event.target.value})
        if(event.target.name === 'image'){
            document.querySelector('.formImageNewManga').src = event.target.value
        }
    }

    // const imageStandBy = (event) => {
    //     event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
    // }
    const hideAddForm = (event) => {
        event.target.parentElement.parentElement.style.display = "none";
    }
    return(
        <div className="containerEditManga">
            <div className="formNavTop">
                <p className="addTitle">Add New</p>
                <i className="fi fi-rr-rectangle-xmark" onClick={hideAddForm}></i>
            </div>
            <img src={manga.image} alt="new manga" className="formImageNewManga"/>
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
                    <a className="cancel" onClick={hideAddForm}>cancel</a>
                    <button className="submit" >Submit</button>
            </div>
        </div>
    )
}

export default EditManga