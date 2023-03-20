import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    mangaList: [],
    serverURL: process.env.REACT_APP_SERVER_URL,
    loading: false,
    error: "",
}

export const getMangaList = createAsyncThunk('manga/getMangaList', () =>{
    return axios.get(`${initialState.serverURL}/manga/`)
    .then(res => {
        return res.data})
})

const mangaSlice = createSlice({
    name: "manga",
    initialState,
    reducers: {
        changeTitle: (state) => {
            state.title = "Test"
        },
        changeTotalChapters: (state) => {
            state.totalChapters = 10;
            console.log(state)
        },
        changeCurrentChapter: (state) => {
            state.currentChapter = 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getMangaList.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getMangaList.fulfilled, (state, action) => {
            state.loading = false
            state.mangaList = action.payload.mangaList
            state.error = ''
        })
        builder.addCase(getMangaList.rejected, (state, action) => {
            state.loading = false
            state.mangaList = []
            state.error = action.error.message
        })
    }
})

// console.log(viewSlice)

export const {changeTitle, changeTotalChapters, changeCurrentChapter} = mangaSlice.actions;
export default mangaSlice.reducer;