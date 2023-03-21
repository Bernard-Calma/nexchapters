import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getMangaList } from "../features/manga/mangaSlice"
import Manga from "../components/Manga"
import NewManga from "../components/NewManga";
import '../styles/mangaList.css'

const MangaList = () => {
    const dispatch = useDispatch(); 
    const {mangaList, serverURL} = useSelector(store => store.manga)
    const {user} = useSelector(store => store.user)
    useEffect(()=>{
        dispatch(getMangaList(user.userID))
    },[])
    return(
        <section className="containerMangaList">
        {
            mangaList.map((manga, index) => 
                <Manga 
                    manga = {manga}
                    key = {manga.id}
                    index = {index}
                    serverURL = {serverURL}
                />)
        }
        <NewManga 
            mangaList = {mangaList}
            serverURL = {serverURL}
        />
        </section>
    )
}

export default MangaList