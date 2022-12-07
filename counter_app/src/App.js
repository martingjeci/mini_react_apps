import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value+1);
  };

  const decrement = () => {
    setValue(value-1);
  };

  const clearValue = () => {
    setValue(0);
  };

  return (
    <div className="App">
      <div className='comps'>
        <button className='button' onClick={increment}>+</button>
        <h1>{value}</h1>
        <button className='button' onClick={decrement}>-</button>
      </div>
      <button className='btn2' onClick={clearValue}>C/CL</button>
    </div>
  );
}

export default App;
