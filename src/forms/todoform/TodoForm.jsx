import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import Style from './todo.style.module.css';
import { addTodo } from '../../store/todoslice/todoSlice';
import { v4 } from 'uuid';

const TodoForm = () => {
    const[text,setText] =useState('')
    const dispatch = useDispatch()
    const data ={
        tvalue:text,
        id:v4()

    }
  return (
    <div className={Style.todo}>
        <input 
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <button onClick={()=>{
            dispatch(addTodo(data))
            setText('')
            }}>Добавить</button>
    </div>
  )
}

export default TodoForm