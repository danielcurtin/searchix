import React from "react";
import './Search.css';

const Search = () => {
  return (
    <section className='search'>
      <input type='text' className='search-bar' id='searchBar'></input>
      <label htmlFor='searchBar'>Enter Search</label>
    </section>
  );
};

export default Search;