import logo from './logo.svg';
import './App.css';
import List from './views/List';
import Header from './views/Header';

const App = () => {
  return(
    <div className='App'>
      <Header />
      <h1>NexChapters</h1>
      <List />
    </div>
  )
}

export default App;
