import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducer/auth.reducer';
import usersSlice from './reducer/users.reduder';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        users: usersSlice.reducer,
        
        // users: 
        // sanctions: sanctionsSlice.reducer,
        // whiteList: whiteListSlice.reducer,
        // found: foundSlice.reducer,
        // loggers: loggersSlice.reducer
    },
});
