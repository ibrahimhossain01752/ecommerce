import {createSlice} from '@reduxjs/toolkit'

import appApi from '../services/appApi';

const initialState = [];

export const productsSlice = createSlice ({
    name: 'products',
    initialState,
    reducers: {},
})

export default productsSlice.reducer;