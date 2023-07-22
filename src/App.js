import logo from './andi.jpg'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello World!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/andreasmoser3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit me ...!
        </a>
      </header>
    </div>
  );
}

export default App;
