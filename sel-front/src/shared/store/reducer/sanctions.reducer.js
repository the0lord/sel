import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "shared/libs/AxiosInstance";

const initialState = {
    kyrgyzOrganizations: [],
    kyrgyzIndividuals: [],
    unOrganizations: [],
    unIndividuals: [],
    isLoading: false,
    error: null,
    total: 0,
}

export const getKyrgyzOrganizations = createAsyncThunk("sanctions/getKyrgyzOrganizations", async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
    const { page, pageSize } = params;
    const api = `/api/v1/sanction/sanction_list_kg/kyrgyz_legal_person?page=${page}&page_size=${pageSize}`;
    try {
        const response = await axiosInstance.get(api);
        return response.data;
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error);
    }
});

export const getKyrgyzIndividuals = createAsyncThunk("sanctions/getKyrgyzIndividuals", async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
    const { page, pageSize } = params;
    const api = `/api/v1/sanction/sanction_list_kg/kyrgyz_physic_person?page=${page}&page_size=${pageSize}`;
    try {
        const response = await axiosInstance.get(api);
        return response.data;
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error);
    }
});

export const getUnOrganizations = createAsyncThunk("sanctions/getUnOrganizations", async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
    const { page, pageSize } = params;
    const api = `/api/v1/sanction/sanction_list_un/organization?page=${page}&page_size=${pageSize}`;
    try {
        const response = await axiosInstance.get(api);
        return response.data;
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error);
    }
});

export const getUnIndividuals = createAsyncThunk("sanctions/getUnIndividuals", async (params = { page: 1, pageSize: 10 }, { rejectWithValue }) => {
    const { page, pageSize } = params;
    const api = `/api/v1/sanction/sanction_list_un/individual?page=${page}&page_size=${pageSize}`;
    try {
        const response = await axiosInstance.get(api);
        return response.data;
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error);
    }
});

const sanctionsSlice = createSlice({
    name: "sanctions",
    initialState,
    extraReducers: (builder) => {
        builder
            // Kyrgyz Organizations
            .addCase(getKyrgyzOrganizations.fulfilled, (state, action) => {
                // Handle successful fetch of Kyrgyz organizations
                state.error = null;
                state.isLoading = false;
                state.kyrgyzOrganizations = action.payload.data;
                state.totalPages = action.payload.total;
            })
            .addCase(getKyrgyzOrganizations.rejected, (state, action) => {
                // Handle error when fetching Kyrgyz organizations
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(getKyrgyzOrganizations.pending, (state, action) => {
                // Handle pending state when fetching Kyrgyz organizations
                state.isLoading = true;
                state.error = null;
            })

            // Kyrgyz Individuals  
            .addCase(getKyrgyzIndividuals.fulfilled, (state, action) => {
                // Handle successful fetch of Kyrgyz individuals
                state.error = null;
                state.isLoading = false;
                state.kyrgyzIndividuals = action.payload.data;
                state.totalPages = action.payload.total;
            })
            .addCase(getKyrgyzIndividuals.rejected, (state, action) => {
                // Handle error when fetching Kyrgyz individuals
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(getKyrgyzIndividuals.pending, (state, action) => {
                // Handle pending state when fetching Kyrgyz individuals
                state.isLoading = true;
                state.error = null;
            })

            // UN Organizations
            .addCase(getUnOrganizations.fulfilled, (state, action) => {
                // Handle successful fetch of UN organizations
                state.error = null;
                state.isLoading = false;
                state.unOrganizations = action.payload.data;
                state.totalPages = action.payload.total;
            })
            .addCase(getUnOrganizations.rejected, (state, action) => {
                // Handle error when fetching UN organizations
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(getUnOrganizations.pending, (state, action) => {
                // Handle pending state when fetching UN organizations
                state.isLoading = true;
                state.error = null;
            })

            // UN Individuals
            .addCase(getUnIndividuals.fulfilled, (state, action) => {
                // Handle successful fetch of UN individuals
                state.error = null;
                state.isLoading = false;
                state.unIndividuals = action.payload.data;
                state.totalPages = action.payload.total;
            })
            .addCase(getUnIndividuals.rejected, (state, action) => {
                // Handle error when fetching UN individuals
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(getUnIndividuals.pending, (state, action) => {
                // Handle pending state when fetching UN individuals
                state.isLoading = true;
                state.error = null;
            });
    }
});

export default sanctionsSlice;
