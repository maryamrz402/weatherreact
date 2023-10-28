import React from "react";
import './App.css';
import Weather from "./Weather";

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
