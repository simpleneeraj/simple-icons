import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModel: false
}

const iconmodel = createSlice({
    name: 'iconmodel',
    initialState: initialState,
    reducers: {
        openModel: (state, action) => {
            state.isModel = action.payload
        }
    }
})


export default iconmodel;