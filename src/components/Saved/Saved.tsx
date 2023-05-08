import React from "react";
import './Saved.css';

const Saved = () => {
  return (
    <section className="saved-fixes">
      <select name='fixes' className="fix-dropdown">
        <option value='' selected disabled>Select a 'fix!</option>
        <option value='placeholder'>Placeholder</option>
        <option value='placeholder2'>Placeholder2</option>
      </select>
      <button className="add-fix fa-solid fa-plus"></button>
      <button className="del-fix fa-solid fa-trash-can"></button>
    </section>
  );
};

export default Saved;