import { configureStore } from "@reduxjs/toolkit";
import isdev from "utils/isdev";
import iconSlice from "./slices/icon";
import iconmodel from "./slices/iconmodel";
import searchSlice from "./slices/search";

const store = configureStore({
    reducer: {
        icon: iconSlice.reducer,
        search: searchSlice.reducer,
        iconmodel: iconmodel.reducer,
    },
    devTools: isdev
})

export default store;