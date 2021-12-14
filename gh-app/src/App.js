import logo from './logo.svg';
import './App.css';
import flow from './flow'
import {
  HashRouter as Router,
  Link
} from "react-router-dom";

function App() {
  return (

      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          reuse test number 2?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Link to= "/flow">flow</Link>
      <flow />
    </div>

    
  );
}

export default App;
