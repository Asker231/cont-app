import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoslice/todoSlice";
import userSlice from "./userSlice.js/userSlice";



const store = configureStore({
    reducer:{
        user:userSlice,
        todos:todoSlice,
    }
})

export default store;