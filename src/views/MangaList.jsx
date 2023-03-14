import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getMangaList } from "../features/manga/mangaSlice"
import Manga from "../components/Manga"
import NewManga from "../components/NewManga";
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
            mangaList.map((manga, index) => 
                <Manga 
                    manga = {manga}
                    key = {manga.id}
                    index = {index}
                />)
        }
        <NewManga 
            mangaList = {mangaList}
        />
        </div>
    )
}

export default MangaList