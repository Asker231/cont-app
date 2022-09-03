import React from 'react'
import SignUpForm from '../../forms/signupForm/SignUpForm';
import Style from './ent.style.module.css';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/userSlice.js/userSlice';

const EntranceC = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const handleEntrance =(email,password)=>{
               const auth = getAuth()
               signInWithEmailAndPassword(auth,email,password)
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
    <div className={Style.ent}>
  
        <SignUpForm
        title='Войти'
        func={handleEntrance}
        />
        </div>
  )
}

export default EntranceC