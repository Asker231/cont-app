import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'users',
    initialState:{
        email:null,
        id:null,
        token:null
    },
    reducers:{
        addUser(state,action){
           state.email = action.payload.email;
           state.id = action.payload.id;
           state.token = action.payload.token;
           console.log(action.payload);
        }
    }
})


export const {addUser} = userSlice.actions;
export default userSlice.reducer;