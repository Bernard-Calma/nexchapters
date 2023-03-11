import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import mangaReducer from "./features/manga/mangaSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        manga: mangaReducer,
    },
})

export default store