import React from 'react'
import Style from './home.style.module.css';
import Auth from '../../hooks/auth';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  const {isAuth} = Auth();
  return isAuth ? (
    <div className={Style.home}>
        <h1>Добро пожаловать</h1>
      </div>
  ):(
    <Navigate to='/signup'/>
  )
}

export default HomePage