
import { Route, Routes } from 'react-router-dom';
import Entrance from '../pages/Entrance/Entrance';
import HomePage from '../pages/HomePage/HomePage';
import SignUp from '../pages/SignUp/SignUp';
import './App.css';

function App() {
  return (
   
     <div className="App">
      <div className='item_one'></div>
      <div className='item_two'></div>
      <div className='item_tree'></div>
      <div className='item_for'></div>
      <div className='item_five'></div>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/entrance' element={<Entrance/>}/>
        </Routes>
    </div> 

    
  );
}

export default App;
