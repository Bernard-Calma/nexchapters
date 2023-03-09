import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import viewReducer from "./features/view/viewSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        view: viewReducer,
    },
})

export default store