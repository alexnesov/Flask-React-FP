import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([{}])

  console.log("App running.")

  useEffect(() => {
    console.log("Fetching data from hello_from_backend ")
    fetch("http://localhost:5000/hello_from_backend").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to GTS front-end<br/><br/>
        </p>
        <div>

        {(typeof data.Hello === 'undefined') ? (
          <p>Loading. . .</p>
        ) : (
          data.Hello.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )}
        </div>
      </header>
    </div>
  );
}

export default App;
