import { Link, Outlet } from 'react-router-dom';

import './App.css';
import Home from './views/Home';
import Header from './views/Header';
import NavBar from './components/NavBar';


const App = () => {
  return(
    <div className='App'>
      <Header />
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App;
