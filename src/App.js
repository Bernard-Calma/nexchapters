import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';


const App = () => {
  const [userLogin, setUserLogin] = useState()
  let {user, error} = useSelector(store => store.user)

  const handleChange = (e) => {
    // Handle changes of inputs and state
    setUserLogin({...userLogin, [e.target.name]: e.target.value})
  }

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
          handleChange]}
      />
    </div>
  )
}

export default App;
