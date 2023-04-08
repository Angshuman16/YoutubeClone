import { createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name:"navbar",
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
        toggleMenu: (state) =>{
            state.isMenuOpen=!state.isMenuOpen; // just acts as toggle on thakle off kore debe I guess.
        },
        closeMenu: (state) =>{
            state.isMenuOpen=false;// we are hard codeing it as we want to collapse the sidebar whenever we load 
                                   // our watch page 

        }

    }
})



export const {toggleMenu,closeMenu} = appSlice.actions; // toggle menu ta ekta action that we are extracting.
export default appSlice.reducer;
