import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducer/auth.reducer';
import usersSlice from './reducer/users.reduder';
import productsSlice from './reducer/products.reduder';
import needsSlice from './reducer/needs.reducer';
import stackSlice from './reducer/stack.reducer';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        users: usersSlice.reducer,
        products: productsSlice.reducer,
        needs: needsSlice.reducer,
        stack: stackSlice.reducer,
        // users: 
        // sanctions: sanctionsSlice.reducer,
        // whiteList: whiteListSlice.reducer,
        // found: foundSlice.reducer,
        // loggers: loggersSlice.reducer
    },
});
