import React from 'react'
import Style from './signForm.style.module.css';
import { useState } from 'react';

const SignUpForm = ({title,func}) => {
    const [email,setEmail]= useState('');
    const[password,setPassword] = useState('');
  return (
    <div className={Style.sform}>
        <h2>{title}</h2>
        <input
        type="email"
        value={email}
        placeholder="Your email..."
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input
        type="password"
        value={password}
        placeholder='Your password'
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={()=>{
            func(email,password)
            setEmail('');
            setPassword('');
        }
        }>{title}</button>
    </div>
  )
}

export default SignUpForm