import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
})

// console.log(counterSlice)

export default counterSlice.reducer;