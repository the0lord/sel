import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "shared/libs/AxiosInstance";
import request from "shared/libs/client";

const initialState = {
    products: [],
    error: null,
    isLoading: false,
    total: 0,
};

export const fetchProductsThunk = createAsyncThunk(
    "products/fetchProducts",
    async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
        const { page, pageSize } = params;
        const api = `/products?page=${page}&page_size=${pageSize}`;
        try {
            const response = await request(api);
            console.log(response)
            return response;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    }
);
export const createProductThunk = createAsyncThunk("products/createProduct", async (body, { rejectWithValue }) => {
    const api = "products";
    try {
        await request(api, { body });
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error);
    }
});



const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching Products
        builder
            .addCase(fetchProductsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload.results;
                state.total = action.payload.count;
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

export default productsSlice;

