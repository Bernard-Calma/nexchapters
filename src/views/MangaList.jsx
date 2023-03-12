import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getMangaList } from "../features/manga/mangaSlice"
import Manga from "../components/Manga"

const MangaList = () => {
    // console.log(useSelector((store)=>console.log(store)))
    const dispatch = useDispatch(); 
    const { mangaList } = useSelector((store) => store.manga)
    useEffect(()=>{
        dispatch(getMangaList())
    },[])
    return(
        <div>
            <h1>Manga List</h1>
            {
                mangaList.map((manga, index) => 
                    <Manga 
                        manga = {manga}
                        key = {index}
                    />)
            }

        </div>
    )
}

export default MangaList