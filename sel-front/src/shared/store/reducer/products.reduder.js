import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "shared/libs/AxiosInstance";

const initialState = {
    products: [],
    error: null,
    isLoading: false,
    total: 0,
};

export const fetchProducts = createAsyncThunk(
    "data/fetchProducts",
    async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
        const { page, pageSize } = params;
        const api = `/api/v1/sanction_white_list/person?page=${page}&page_size=${pageSize}`;
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

export const createProduct = createAsyncThunk(
    "data/createProduct",
    async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
        const { page, pageSize } = params;
        const api = `/api/v1/sanction_white_list/organization?page=${page}&page_size=${pageSize}`;
        try {
            const response = await axiosInstance.post(api);
            return response.data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    }
);

const whiteListSlice = createSlice({
    name: "whiteList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching Persons
        builder
            .addCase(fetchPersons.fulfilled, (state, action) => {
                state.isLoading = false;
                state.persons = action.payload.data;
                state.total = action.payload.total;
                // console.log('Reducer payload:', action.payload);  // Add this line
            })
            .addCase(fetchPersons.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchPersons.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;

            });
        console.log(initialState.persons, 'array');
        // Fetching Organizations
        builder
            .addCase(fetchOrganizations.fulfilled, (state, action) => {
                state.isLoading = false;
                state.organizations = action.payload.data;
                state.total = action.payload.total;
            })
            .addCase(fetchOrganizations.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchOrganizations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
        // console.log(initialState.persons, 'array');
    },
});

export default whiteListSlice;

