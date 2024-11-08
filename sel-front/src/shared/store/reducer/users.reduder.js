import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "shared/libs/AxiosInstance";
import request from "shared/libs/client";

const initialState = {
    users: [],
    error: null,
    isLoading: false,
    total: 0,
};

export const fetchUsersThunk = createAsyncThunk(
    "users/fetchUsers",
    async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
        const { page, pageSize } = params;
        const api = `auth/users?page=${page}&page_size=${pageSize}`;
        try {
            const response = await request(api);
            return response;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    }
);

export const createUserThunk = createAsyncThunk("users/createUser", async (body, { rejectWithValue }) => {
    const api = "auth/users/";
    try {
        await request(api, { body });
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error);
    }
});



const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching Products
        builder
            .addCase(fetchUsersThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload.results;
                state.total = action.payload.count;
            })
            .addCase(fetchUsersThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUsersThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;

            });
        // Fetching Organizations
        builder
            .addCase(createUserThunk.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(createUserThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createUserThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
        // console.log(initialState.persons, 'array');
    },
});

export default usersSlice;

