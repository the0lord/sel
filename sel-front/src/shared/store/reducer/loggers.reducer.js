import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "shared/libs/AxiosInstance";

const initialState = {
    persons: [],
    error: null,
    isLoading: false,
    total: 0,
};

export const fetchLoggers = createAsyncThunk(
    "data/fetchLoggers",
    async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
        const { page, pageSize } = params;
        const api = `/api/v1/user_log?page=${page}&page_size=${pageSize}`;
        try {
            const response = await axiosInstance.get(api);
            // console.log('API response:', response.data);  // Add this line
            return response.data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    }
);

const loggersSlice = createSlice({
    name: "loggers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching Persons
        builder
            .addCase(fetchLoggers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.persons = action.payload.data;
                state.total = action.payload.total;
                // console.log('Reducer payload:', action.payload);  // Add this line
            })
            .addCase(fetchLoggers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchLoggers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;

            });
        console.log(initialState.persons, 'array');
      
        // console.log(initialState.persons, 'array');
    },
});

export default loggersSlice;
