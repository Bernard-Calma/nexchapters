import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getMangaList } from "../features/manga/mangaSlice"
import Manga from "../components/Manga"
import NewManga from "../components/NewManga";
import '../styles/mangaList.css'
import { useNavigate } from "react-router-dom";

const MangaList = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate()
    const {mangaList, serverURL} = useSelector(store => store.manga)
    const {user} = useSelector(store => store.user)
    useEffect(()=>{
        dispatch(getMangaList(user.id))
    },[])
    return(
        <>
        {
            !user.id ?
            setTimeout(() => {
                navigate("/login")
            })
            :
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
                    user = {user}
                />
            </section>
            }
        </>
    )
}

export default MangaList