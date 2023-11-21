import { configureStore } from '@reduxjs/toolkit';
import markdownReducer from './markdownSlice.js';

export const store = configureStore({
    reducer: {
        markdown: markdownReducer,
    },
});