import React, { useState, useEffect } from 'react';
import './App.css';



function App() {
  const [data, setData] = useState('loading...');
  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((fetcheddata) => {
        setData(fetcheddata.value);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chuck Norris Jokes</h1>
        <h2>Listen to this...</h2>
        <img src={require("./chuck.png")} alt="chuck pic" />
        <p></p><p></p>
        <div>
          <span>{data}</span>
        </div>
      </header>
    </div>
  );
}

export default App;