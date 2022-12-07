import React, {useState} from 'react';
import './App.css';

const App = () => {

  const [searchValue, setSearchValue] = useState('');

  const list = ["Harry","Ross","Bruce","Cook","Carolyn","Morgan",
  "Albert","Walker","Randy","Reed","Larry","Barnes",
  "Lois","Wilson","Jesse","Campbell","Ernest","Rogers",
  "Theresa","Patterson","Henry","Simmons","Michelle","Perry",
  "Frank","Butler","Shirley","Brooks","Rachel","Edwards",
  "Christopher","Perez","Thomas","Baker","Sara","Moore",
  "Chris","Bailey","Roger","Johnson","Marilyn","Thompson",
  "Anthony","Evans","Julie","Hall","Paula","Phillips","Annie","Hernandez",
  "Dorothy","Murphy","Alice","Howard","Ruth","Jackson","Debra","Allen",
  "Gerald","Harris","Raymond","Carter","Jacqueline","Torres",
  "Joseph","Nelson","Carlos","Sanchez","Ralph","Clark",
  "Jean","Alexander","Stephen","Roberts","Eric","Long",
  "Amanda","Scott","Teresa","Diaz","Wanda","Thomas"];

  const filteredItems = list.filter (word => word.includes(searchValue));

  const listItems = filteredItems.map(
    (val) => <p>{val}</p>
  );

  return (
    <div className="App">

      <div className='input'>
        <input 
          className='input-bar' 
          placeholder='Search...' 
          type='text'
          onChange={ e => {setSearchValue(e.target.value)}}
        >
        
        </input>
      </div>

      <div className='list'>
        <p>{listItems}</p>
      </div>

    </div>
  );
}

export default App;
