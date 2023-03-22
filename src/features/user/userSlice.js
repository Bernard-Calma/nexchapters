import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    user: {
        id: "",
        username: ""
    },
    serverURL: process.env.REACT_APP_SERVER_URL,
    loading: false,
    error: "",
}

export const login = createAsyncThunk('user', (body) =>{
    return axios.post(`${initialState.serverURL}/user/`, body,
    {
        headers: {
            'Content-Type': 'application/json'
        },
    })
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
            state.loading = false
            // Added if statement to not do anything if login failed
            state.user = action.payload.data ? action.payload.data : state.user
            state.error = action.payload.status.message
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            state.user = {
                id: "",
                username: ""
            }
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer;