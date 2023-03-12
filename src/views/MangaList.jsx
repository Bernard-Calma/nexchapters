import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getMangaList } from "../features/manga/mangaSlice"
import Manga from "../components/Manga"
import '../styles/mangaList.css'

const MangaList = () => {
    // console.log(useSelector((store)=>console.log(store)))
    const dispatch = useDispatch(); 
    const {mangaList} = useSelector((store) => store.manga)
    useEffect(()=>{
        dispatch(getMangaList())
    },[])
    return(
        <div className="containerMangaList">
        {
            mangaList.map(manga => 
                <Manga 
                    manga = {manga}
                    key = {manga.id}
                />)
        }
        </div>
    )
}

export default MangaList