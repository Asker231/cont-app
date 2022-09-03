import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
    initialState:{
        arr:[]
    },reducers:{
        addTodo(state,action){
            state.arr.push(action.payload)
        },removeTodo(state,action){
              state.arr = state.arr.filter((el)=>el.id !== action.payload )
        }
    }
})
export const {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;