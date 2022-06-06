import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import myInfo from './reducer/myInfoSlice'

export const store = configureStore({
    reducer: {myInfo},
    middleware: [logger],
    // devTools:
});