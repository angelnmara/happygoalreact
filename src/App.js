import logo from './images/happy_goal.png';
import './App.css';
import Navbar from './components/Navbar'
import Area from './components/Areas';
import Rol from './components/Rol';
import Funcionalidades from './components/Funcionalidades';
import Login from './components/Login';

function App() {
  return (
    <div className="App">      
    {/* <Navbar/> */}
    <Login/>
      {/* <header className="App-header">      
        <img src={logo} width="400px" height="10px" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
