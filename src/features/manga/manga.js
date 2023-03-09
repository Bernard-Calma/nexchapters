import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    totalChapters: 0,
    currentChapter: 0,
}

const mangaSlice = createSlice({
    name: "manga",
    initialState,
    reducers: {
        changeTitle: (state) => {
            state.view = "Test"
        },
        changeTotalChapters: (state) => {
            state.totalChapters = 10;
        },
        changeCurrentChapter: (state) => {
            state.currentChapter = 1;
        }
    }
})

// console.log(viewSlice)

export const {changeTitle, changeTotalChapters, changeCurrentChapter} = mangaSlice.actions;
export default mangaSlice.reducer;