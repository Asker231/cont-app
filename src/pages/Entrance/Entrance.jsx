import React from 'react'
import { Link } from 'react-router-dom';
import EntranceC from '../../components/E/EntranceC';
import Style from './entrance.style.module.css';

const Entrance = () => {
  return (
    <div className={Style.entrance}>
      <EntranceC/>
        Войти или  <Link to="/signup">Регистрация</Link>
        </div>
  )
}

export default Entrance