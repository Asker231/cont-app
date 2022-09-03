import React from 'react'
import SignUpForm from '../../forms/signupForm/SignUpForm';
import Style from './sign.style.module.css';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/userSlice.js/userSlice';
import { useNavigate } from 'react-router-dom';

const SignC = () => {
    const nav = useNavigate()
  const dispatch = useDispatch()
    const handleSign =(email,password)=>{
          const auth = getAuth();
          createUserWithEmailAndPassword(auth,email,password)
          .then(({user})=>{
            console.log(user)
            dispatch(addUser({
                email:user.email,
                id:user.uid,
                token:user.accessToken
            }))
                  nav('/')
          })
    }
  return (
    <div className={Style.sign}>
      <SignUpForm
      title='Регистрация'
      func={handleSign}
      />
    </div>
  )
}

export default SignC