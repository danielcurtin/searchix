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
      <section className='type-select'>
        <label className='type-label'>
          <input type='radio' value='Prefix' name='fix-selection' className='type-btn'></input>
          Prefix
        </label>
        <label className='type-label'>
          <input type='radio' value='Suffix' name='fix-selection' className='type-btn'></input>
          Suffix
        </label>
      </section>
      <button type='submit' className='search-btn'>Search</button>
    </main>
  );
};

export default App;
