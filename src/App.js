import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';


const App = () => {
  return(
    <div className='App'>
      <Header />
      <NavBar 
      
      />
      <Outlet />
    </div>
  )
}

export default App;
