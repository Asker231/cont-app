import React from 'react'
import { FaTrashAlt} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Style from './todolist.style.module.css';
import { removeTodo } from '../../store/todoslice/todoSlice';

const TodoList = () => {
    const disp = useDispatch()
    const sel = useSelector((state)=>state.todos.arr);
  return (
    <div className={Style.todolist}>
        {
            sel.map((el)=>{
                 return <p className={Style.todoitem}><input type="checkbox"/> {el.tvalue}<FaTrashAlt onClick={()=>disp(removeTodo(el.id))} className={Style.outs}/></p>
            })
        }
    </div>
  )
}

export default TodoList