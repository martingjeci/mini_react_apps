import React, {useState} from 'react';
import './App.css';

const App = () => {
  const colors = ['blue','red','lightgreen'];
  const [value, setValue] = useState(0);
  const [color, setColor] = useState('blue');


  const increment = () => {
    const newValue = value + 1;
    if(newValue >= 20 && newValue < 30){
      setColor(colors[2]);
    }
    else if (newValue >= 30){
      setColor(colors[1]);
    }
    else if (newValue < 20){
      setColor(colors[0]);
    }
    setValue(newValue);
  };

  const decrement = () => {
    const newValue = value-1;
    if(newValue >= 20 && newValue < 30){
      setColor(colors[2]);
    }
    else if (newValue >= 30){
      setColor(colors[1]);
    }
    else if (newValue < 20){
      setColor(colors[0]);
    }
    setValue(newValue);
  };


  return (
    <div className="App">
      <div className='main-div'>
        <div className='temp' style={{backgroundColor: color}}>
          <h1 className='btn1'>{value}°C</h1>
        </div>
        <div className='buttons'>
          <button className='btn2' onClick={increment}>+</button>
          <button className='btn2' onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
