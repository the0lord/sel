import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "shared/libs/client";
const initialState = {
    role: null,
    token: null,
    isLoading: false,
    error: null,
}

export const loginThunk = createAsyncThunk("auth/login", async (body, { rejectWithValue }) => {
    const api = "auth/jwt/create";
    try {
        const data = await request(api, { body });
        return data?.access;
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error);
    }
});

export const getMeThunk = createAsyncThunk("auth", async (_, { rejectWithValue }) => {
    const api = "auth/users/me";
    try {
        const data = await request(api);
        return data;
    } catch (error) {
        return rejectWithValue
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
            })
            .addCase(getMeThunk.fulfilled, (state, action) => {
                state.role = action.payload.role;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getMeThunk.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(getMeThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

    }
});


export const { setToken } = authSlice.actions;
export default authSlice;