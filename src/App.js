import { Link } from 'react-router-dom';

import './App.css';
import List from './views/List';
import Header from './views/Header';


const App = () => {
  return(
    <div className='App'>
      <Header />
      <Link to="about">About</Link>
      <List />
    </div>
  )
}

export default App;
