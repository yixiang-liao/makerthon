import React, { useEffect } from 'react';
import './style/style.css';
import Title from './components/Title';
import News from './components/News';
import Page from './components/Page';

const App = () => {
  
  return (
    <div className='app'>
      <Title />
      <Page/>
      <News />
    </div>
  )
}

export default App
