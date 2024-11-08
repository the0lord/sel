import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "shared/libs/AxiosInstance";
import request from "shared/libs/client";

const initialState = {
    regions: [],
    error: null,
    isLoading: false,
    total: 0,
};

export const fetchRegionsThunk = createAsyncThunk(
    "regions/fetchRegions",
    async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
        const { page, pageSize } = params;
        const api = `/region?page=${page}&page_size=${pageSize}`;
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

const regionsSlice = createSlice({
    name: "regions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching Products
        builder
            .addCase(fetchRegionsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload.results;
                state.total = action.payload.count;
            })
            .addCase(fetchRegionsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchRegionsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;

            });
    },
});

export default regionsSlice;

