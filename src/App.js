import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';


const App = () => {
  const [userLogin, setUserLogin] = useState()
  const {user, error} = useSelector(store => store.user)
  return(
    <div className='App'>
      <Header />
      <NavBar 
      />
      <Outlet 
        context={[
          user, 
          userLogin, 
          error,
          setUserLogin]}
      />
    </div>
  )
}

export default App;
