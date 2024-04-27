import React, { useEffect } from 'react';
import './style/style.css';
import Title from './components/Title';
import News from './components/News';
import Table from './components/TableP';

const App = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <Title />
      <News />
      <Table />
    </div>
  )
}

export default App
