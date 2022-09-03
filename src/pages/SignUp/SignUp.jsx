import React from 'react'
import { Link } from 'react-router-dom';
import SignC from '../../components/S/SignC';
import Style from './signup.style.module.css';


const SignUp = () => {

  return (
    <div className={Style.signup}>
       <div className={Style.item_one}></div>
      <div className={Style.item_two}></div>
      <div className={Style.item_tree}></div>
      <div className={Style.item_for}></div>
      <div className={Style.item_five}></div>
     <SignC/>
      или <Link to='/entrance'>войти</Link>
      </div>
  )
}

export default SignUp