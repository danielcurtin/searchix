import React from 'react';
import './App.css';

import Search from '../Search/Search';
import Saved from '../Saved/Saved';

const App = () => {
  return (
    <main className='app'>
      <h1>Searchix</h1>
      <Search></Search>
      <Saved></Saved>
    </main>
  );
};

export default App;
