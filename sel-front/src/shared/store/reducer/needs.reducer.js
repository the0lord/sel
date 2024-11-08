import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "shared/libs/AxiosInstance";
import request from "shared/libs/client";

const initialState = {
    needs: [],
    error: null,
    isLoading: false,
    total: 0,
};

export const fetchNeedsThunk = createAsyncThunk(
    "needs/fetchNeeds",
    async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
        const { page, pageSize } = params;
        const api = `/needs?page=${page}&page_size=${pageSize}`;
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
export const createNeedThunk = createAsyncThunk("needs/createNeed", async (body, { rejectWithValue }) => {
    const api = "needs";
    try {
        await request(api, { body });
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error);
    }
});



const needsSlice = createSlice({
    name: "needs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching Needs
        builder
            .addCase(fetchNeedsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.needs = action.payload.results;
                state.total = action.payload.count;
            })
            .addCase(fetchNeedsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchNeedsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;

            });
        // Fetching Organizations
        builder
            .addCase(createNeedThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.total = action.payload.total;
            })
            .addCase(createNeedThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createNeedThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
        // console.log(initialState.persons, 'array');
    },
});

export default needsSlice;
