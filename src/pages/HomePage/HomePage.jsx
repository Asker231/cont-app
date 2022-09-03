import React from 'react'
import Style from './home.style.module.css';
import Auth from '../../hooks/auth';
import { Navigate } from 'react-router-dom';
import Usercard from '../../components/usercard/Usercard';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import TodoForm from '../../forms/todoform/TodoForm';
import TodoList from '../../components/todolist/TodoList';
const HomePage = () => {
  const [state,setState] = useState(false);
  const {isAuth} = Auth();
  return isAuth ? (
    <div className={Style.home}>
          <h1>Todo App</h1>
          <TodoForm/>
          <TodoList/>
        <FaUserCircle className={Style.out} onClick={()=>setState(state=>!state)}/>
       {state? <Usercard/>:null}
         
      </div>
  ):(
    <Navigate to='/signup'/>
  )
}

export default HomePage