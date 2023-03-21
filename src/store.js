import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./features/manga/mangaSlice"
import userReducer from "./features/user/userSlice"

const store = configureStore({
    reducer: {
        manga: mangaReducer,
        user: userReducer,
    },
})

export default store