import React from 'react'
import { Link } from 'react-router-dom';
import EntranceC from '../../components/E/EntranceC';
import Style from './entrance.style.module.css';

const Entrance = () => {
  return (
    <div className={Style.entrance}>
             <div className={Style.item_one}></div>
      <div className={Style.item_two}></div>
      <div className={Style.item_tree}></div>
      <div className={Style.item_for}></div>
      <div className={Style.item_five}></div>
      <EntranceC/>
        Войти или  <Link to="/signup">Регистрация</Link>
        </div>
  )
}

export default Entrance