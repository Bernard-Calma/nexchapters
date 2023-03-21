import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    user: {
        userID: "",
        username: ""
    },
    serverURL: process.env.REACT_APP_SERVER_URL,
    loading: false,
    error: "",
}

export const login = createAsyncThunk('user', async(body) =>{
    return axios.post(`${initialState.serverURL}/user/`, body)
    .then(res => res.data)
})

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action)
            state.loading = false
            state.user = action.payload.data
            state.error = action.payload.status.message
        })
        builder.addCase(login.rejected, (state, action) => {            state.loading = false
            state.getUser = {
                userID: "",
                username: ""
            }
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer;