import { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  const [date, setDate] = useState('March 29, 2022')

  useEffect(() => {
    async function fetchDate() {
      const resp = await axios({
        url: 'backend:5000/date',
        method: 'get'
      })
      setDate(resp.data.date) 
    }
    fetchDate()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React.js.<br/><br/>
          Today's Date is {date}
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
    </div>
  );
}

export default App;
