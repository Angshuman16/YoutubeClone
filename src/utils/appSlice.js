import { createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name:"navbar",
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
        toggleMenu: (state) =>{
            state.isMenuOpen=!state.isMenuOpen; // just acts as toggle on thakle off kore debe I guess.
        }

    }
})



export const {toggleMenu} = appSlice.actions; // toggle menu ta ekta action that we are extracting.
export default appSlice.reducer;
