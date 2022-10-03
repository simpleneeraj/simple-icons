import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IconStateType } from "typings";

const init: IconStateType = {
    name: "H",
    source: "//",
};

const iconSlice = createSlice({
    name: "icon",
    initialState: init,
    reducers: {
        setIconName: (_state, action: PayloadAction<any>) => {
            return action.payload;
        },
    },
});


export default iconSlice;
