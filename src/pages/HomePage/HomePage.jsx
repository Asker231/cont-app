import React from 'react'
import Style from './home.style.module.css';
import Auth from '../../hooks/auth';
import { Navigate } from 'react-router-dom';
import Usercard from '../../components/usercard/Usercard';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
const HomePage = () => {
  const [state,setState] = useState(false);
  const {isAuth} = Auth();
  return isAuth ? (
    <div className={Style.home}>
          <h1>Добро пожаловать</h1>
        <FaBars className={Style.out} onClick={()=>setState(state=>!state)}/>
       {state? <Usercard/>:null}
         
      </div>
  ):(
    <Navigate to='/signup'/>
  )
}

export default HomePage