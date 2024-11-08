import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "shared/libs/AxiosInstance";

const initialState = {
    foundPersons: [],
    foundOrganizations: [],
    error: null,
    isLoading: false,
    total: 0,
};

export const getPersons = createAsyncThunk(
    "data/getPersons",
    async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
        const { page, pageSize } = params;
        const api = `/api/v1/sanction_found/person?page=${page}&page_size=${pageSize}`;
        try {
            const response = await axiosInstance.get(api);
            // Transform the response to extract KyrgyzPhysicPerson data
            const transformedData = response.data.data.map(person => ({
                ...person,
                ...person.KyrgyzPhysicPerson
            }));
            return { data: transformedData, total: response.data.total };
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    }
);


export const getOrganizations = createAsyncThunk(
    "data/getOrganizations",
    async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
        const { page, pageSize } = params;
        const api = `/api/v1/sanction_found/organization?page=${page}&page_size=${pageSize}`;
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

const foundSlice = createSlice({
    name: "found",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPersons.fulfilled, (state, action) => {
                state.isLoading = false;
                state.foundPersons = action.payload.data;
                state.total = action.payload.total;
            })
            .addCase(getPersons.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getPersons.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;

            });
        builder
            .addCase(getOrganizations.fulfilled, (state, action) => {
                state.isLoading = false;
                state.foundOrganizations = action.payload.data;
                state.total = action.payload.total;
            })
            .addCase(getOrganizations.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getOrganizations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default foundSlice;
