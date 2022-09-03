import React from 'react'
import { Link } from 'react-router-dom';
import SignC from '../../components/S/SignC';
import Style from './signup.style.module.css';


const SignUp = () => {

  return (
    <div className={Style.signup}>
     <SignC/>
      или <Link to='/entrance'>войти</Link>
      </div>
  )
}

export default SignUp