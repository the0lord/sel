import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "shared/libs/AxiosInstance";

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
        const api = `/auth/jwt/list?page=${page}&page_size=${pageSize}`;
        try {
            const response = await axiosInstance.get(api);
            return response.data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    }
);
export const createUserThunk = createAsyncThunk("users/createUser", async (body, { rejectWithValue }) => {
    const api = "/auth/jwt/create";
    try {
        await axiosInstance.post(api, body);
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error);
    }
});



const whiteListSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching Products
        builder
            .addCase(fetchProductsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.persons = action.payload.data;
                state.total = action.payload.total;
            })
            .addCase(fetchProductsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProductsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;

            });
        // Fetching Organizations
        builder
            .addCase(createProductThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.organizations = action.payload.data;
                state.total = action.payload.total;
            })
            .addCase(createProductThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createProductThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
        // console.log(initialState.persons, 'array');
    },
});

export default whiteListSlice;

