import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Style from './carduser.style.module.css';
import { removeUser } from '../../store/userSlice.js/userSlice';
const Usercard = () => {
    const dispatch = useDispatch();
    const {email} = useSelector(state=>state.user);
    const handleChange=(e)=>{
        // e.prevent.default();
         dispatch(removeUser())
    }
    const image = 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png';
  return (
    <div 
    className={Style.usercard}>
          <img src={image} alt="avatar"/>
          <p>{email}</p>
          <button onClick={()=>handleChange()} >выйти</button>
    </div>
  )
}

export default Usercard