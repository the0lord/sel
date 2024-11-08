import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "shared/libs/AxiosInstance";
const initialState = {
    token: null,
    isLoading: false,
    error: null,
}

export const loginThunk = createAsyncThunk("auth", async (body, { rejectWithValue }) => {
    const api = "auth/jwt/create";
    try {
        const data = await axiosInstance.post(api, body);
        return data?.data?.access_token;
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem("token", action.payload);
            state.single = {};
            state.isLoading = false;
            state.error = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.error = null;
                state.isLoading = false;
                state.token = action.payload;
                localStorage.setItem("token", action.payload);
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.error = action.payload;
                state.token = null;
                state.isLoading = false;
                console.log("rejected");
            })
            .addCase(loginThunk.pending, (state, action) => {
                state.isLoading = true;
                state.token = null;
                state.error = "";
            });
    }
});


export const { setToken } = authSlice.actions;
export default authSlice;