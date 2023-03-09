import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        add: (state) => {
            state.count += 1;
        },
        minus: (state) =>{
            if (state.count > 0) state.count -= 1;
        }
    }
})

console.log(counterSlice)

export const {add, minus} = counterSlice.actions;
export default counterSlice.reducer;