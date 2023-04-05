import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
    reducer: {
        navbar:appSlice,
    },

});

export default store;
