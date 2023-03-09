import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    view: "home",
}

const viewSlice = createSlice({
    name: "view",
    initialState,
    reducers: {
        changeView: (state) => {
            state.view = "mangaList"
        }
    }
})

// console.log(viewSlice)

export const {changeView} = viewSlice.actions;
export default viewSlice.reducer;