
import './App.css';
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>weather search</h1>
        <Weather city="paris"/>
      </header>
    </div>
  );
}

export default App;
