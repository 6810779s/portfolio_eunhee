import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import myInfo from './reducer/pages/myInfoSlice'
import category from './reducer/common/categorySlice';

export const store = configureStore({
    reducer: {myInfo,category},
    middleware: [logger],
    // devTools:
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;