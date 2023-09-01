import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({
    reducer: {
        navbar:appSlice,
        chat:ChatSlice,
        
    },

});

export default store;
