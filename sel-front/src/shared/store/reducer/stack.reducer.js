import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "shared/libs/AxiosInstance";
import request from "shared/libs/client";

const initialState = {
    stack: [],
    error: null,
    isLoading: false,
    total: 0,
};

export const fetchStackThunk = createAsyncThunk(
    "stack/fetchStack",
    async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
        const { page, pageSize } = params;
        const api = `/farmerstacks?page=${page}&page_size=${pageSize}`;
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

export const createStackThunk = createAsyncThunk("stack/createStack", async (body, { rejectWithValue }) => {
    const api = "farmerstacks/";
    try {
        await request(api, { body });
        window.history.back();
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error);
    }
});



const stackSlice = createSlice({
    name: "stack",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching Stack
        builder
            .addCase(fetchStackThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.stack = action.payload.results;
                state.total = action.payload.count;
            })
            .addCase(fetchStackThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchStackThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;

            });
        // Fetching Organizations
        builder
            .addCase(createStackThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.total = action.payload.total;
            })
            .addCase(createStackThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createStackThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
        // console.log(initialState.persons, 'array');
    },
});

export default stackSlice;

