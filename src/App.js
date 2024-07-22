import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchData } from './services/api';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchDatafromAPI = async () => {
      try {
        const responseData = await fetchData();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDatafromAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {data}
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
